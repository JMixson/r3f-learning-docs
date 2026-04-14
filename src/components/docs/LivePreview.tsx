import type { JSX } from 'react';
import './live-preview.css';

export interface LivePreviewProps {
  slug: string;
  title: string;
}

function getPreviewUrl(slug: string) {
  return `/previews/${slug}/`;
}

export default function LivePreview({
  slug,
  title,
}: LivePreviewProps): JSX.Element {
  const previewUrl = getPreviewUrl(slug);

  return (
    <section className="live-preview" aria-label={`${title} interactive demo`}>
      <div className="live-preview__preview-heading">
        <h3>Live preview</h3>
      </div>

      <div className="live-preview__surface">
        <iframe
          className="live-preview__iframe"
          src={previewUrl}
          title={`${title} live preview`}
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
    </section>
  );
}
