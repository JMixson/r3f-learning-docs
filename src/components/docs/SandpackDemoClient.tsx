import {
  SandpackPreview,
  SandpackProvider,
  useSandpack,
  useSandpackPreviewProgress,
  type SandpackFiles,
  type SandpackSetup,
} from '@codesandbox/sandpack-react';
import { useRef } from 'react';
import type { SandpackDemoProps } from './SandpackDemo';

const sandpackTheme = {
  colors: {
    accent: '#38bdf8',
    base: '#020617',
    clickable: '#cbd5e1',
    disabled: '#475569',
    error: '#fb7185',
    errorSurface: '#3b1220',
    hover: '#e2e8f0',
    surface1: '#020617',
    surface2: '#0f172a',
    surface3: '#1e293b',
  },
  font: {
    body: 'ui-sans-serif, system-ui, sans-serif',
    lineHeight: '1.5',
    mono: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    size: '14px',
  },
  syntax: {
    comment: '#64748b',
    definition: '#f8fafc',
    keyword: '#7dd3fc',
    plain: '#e2e8f0',
    property: '#fbbf24',
    punctuation: '#94a3b8',
    static: '#c084fc',
    string: '#86efac',
    tag: '#f97316',
  },
} as const;

const previewShellStyles = `
html,
body,
#root {
  margin: 0;
  width: 100%;
  height: 100%;
}

body {
  background: #020617;
  color: #e2e8f0;
  font-family: ui-sans-serif, system-ui, sans-serif;
  overflow: hidden;
}

* {
  box-sizing: border-box;
}

canvas {
  display: block;
}
`;

function getReactTypesVersion(reactVersion: string | undefined) {
  const majorVersion = reactVersion?.match(/\d+/)?.[0] ?? '19';

  return `^${majorVersion}.0.0`;
}

function SandpackLoadingOverlay() {
  const {
    sandpack: { status },
  } = useSandpack();
  const progressMessage = useSandpackPreviewProgress({ timeout: 6000 });

  const message =
    status === 'timeout'
      ? 'The sandbox took too long to respond. Use the refresh control in the preview header to try again.'
      : (progressMessage ??
        (status === 'initial' || status === 'idle'
          ? 'Loading React Three Fiber preview...'
          : null));

  if (!message) {
    return null;
  }

  return (
    <div
      className={`sandpack-demo__loading-overlay${status === 'timeout' ? ' sandpack-demo__loading-overlay--warning' : ''}`}
      aria-live="polite"
    >
      <span className="sandpack-demo__loading-title">
        {status === 'timeout' ? 'Preview timed out' : 'Preparing sandbox'}
      </span>
      <span>{message}</span>
    </div>
  );
}

export default function SandpackDemoClient({
  slug,
  title,
  r3fCode,
  versions,
}: SandpackDemoProps) {
  const filesRef = useRef<SandpackFiles | null>(null);
  const customSetupRef = useRef<SandpackSetup | null>(null);

  if (!filesRef.current) {
    filesRef.current = {
      '/App.jsx': {
        code: 'import "./styles.css";\nexport { default } from "./r3f/App.jsx";\n',
        hidden: true,
      },
      '/r3f/App.jsx': {
        code: r3fCode,
      },
      '/styles.css': { code: previewShellStyles, hidden: true },
    };
  }

  if (!customSetupRef.current) {
    const reactTypesVersion = getReactTypesVersion(versions.react);

    customSetupRef.current = {
      dependencies: {
        '@react-three/fiber': versions['@react-three/fiber'] ?? 'latest',
        '@types/react': reactTypesVersion,
        '@types/react-dom': reactTypesVersion,
        react: versions.react ?? 'latest',
        'react-dom': versions['react-dom'] ?? 'latest',
        three: versions.three ?? 'latest',
      },
    };
  }

  return (
    <section className="sandpack-demo" aria-label={`${title} interactive demo`}>
      <div className="sandpack-demo__preview-heading">
        <h3>Live preview</h3>
        <p>The sandbox runs the React Three Fiber version shown above.</p>
      </div>

      <div className="sandpack-demo__surface">
        <SandpackProvider
          key={slug}
          template="vite-react"
          files={filesRef.current}
          customSetup={customSetupRef.current}
          theme={sandpackTheme}
          options={{
            autorun: true,
            autoReload: true,
            initMode: 'user-visible',
            recompileDelay: 300,
            recompileMode: 'delayed',
          }}
        >
          <div className="sandpack-demo__preview-shell">
            <SandpackLoadingOverlay />
            <SandpackPreview
              className="sandpack-demo__preview"
              showNavigator={false}
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
              showRestartButton={false}
              showSandpackErrorOverlay
              style={{ height: '100%' }}
            />
          </div>
        </SandpackProvider>
      </div>
    </section>
  );
}
