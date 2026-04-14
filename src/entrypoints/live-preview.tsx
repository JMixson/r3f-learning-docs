import '@vitejs/plugin-react/preamble';
import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

type Runtime = 'three' | 'r3f';

declare global {
  interface Window {
    __LIVE_PREVIEW__?: {
      runtime: Runtime;
      slug: string;
    };
  }
}

const threeModules = import.meta.glob('../../examples/*/three/main.js');
const r3fModules = import.meta.glob('../../examples/*/r3f/App.jsx');

const previewConfig = window.__LIVE_PREVIEW__;
const rootElement = document.getElementById('live-preview-root');

function showMessage(message: string) {
  if (!rootElement) return;
  rootElement.innerHTML = `<div class="preview-message">${message}</div>`;
}

async function runThreePreview(slug: string) {
  const modulePath = `../../examples/${slug}/three/main.js`;
  const loadModule = threeModules[modulePath];

  if (!loadModule) {
    showMessage(`Three.js preview for "${slug}" was not found.`);
    return;
  }

  rootElement?.setAttribute('data-runtime', 'three');
  await loadModule();
}

async function runR3fPreview(slug: string) {
  const modulePath = `../../examples/${slug}/r3f/App.jsx`;
  const loadModule = r3fModules[modulePath];

  if (!loadModule || !rootElement) {
    showMessage(`React Three Fiber preview for "${slug}" was not found.`);
    return;
  }

  const module = (await loadModule()) as { default?: React.ComponentType };

  if (!module.default) {
    showMessage(`React Three Fiber preview for "${slug}" is missing a default export.`);
    return;
  }

  document.body.dataset.runtime = 'r3f';
  createRoot(rootElement).render(
    <Suspense fallback={<div className="preview-message">Loading preview...</div>}>
      <module.default />
    </Suspense>,
  );
}

async function bootstrapPreview() {
  if (!previewConfig || !rootElement) return;

  try {
    if (previewConfig.runtime === 'three') {
      await runThreePreview(previewConfig.slug);
      return;
    }

    await runR3fPreview(previewConfig.slug);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown preview error';
    showMessage(`Preview failed: ${message}`);
  }
}

void bootstrapPreview();
