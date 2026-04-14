import type { JSX } from 'react';
import './sandpack-demo.css';

export interface SandpackDemoProps {
  slug: string;
  title: string;
}

function getPreviewUrl(slug: string) {
  return `/previews/${slug}/`;
}

export default function SandpackDemo({
  slug,
  title,
}: SandpackDemoProps): JSX.Element {
  const previewUrl = getPreviewUrl(slug);

  return (
    <section className="sandpack-demo" aria-label={`${title} interactive demo`}>
      <div className="sandpack-demo__preview-heading">
        <h3>Live preview</h3>
      </div>

      <div className="sandpack-demo__surface">
        <iframe
          className="sandpack-demo__iframe"
          src={previewUrl}
          title={`${title} live preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
