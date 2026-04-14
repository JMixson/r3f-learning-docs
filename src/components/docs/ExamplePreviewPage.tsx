import animationLoopPreview from '../../../examples/animation-loop-to-useframe/r3f/App.jsx';
import eventsPreview from '../../../examples/events/r3f/App.jsx';
import lightsPreview from '../../../examples/lights/r3f/App.jsx';
import loadingPreview from '../../../examples/loading-models-and-textures/r3f/App.jsx';
import meshPreview from '../../../examples/mesh-geometry-material/r3f/App.jsx';
import scenePreview from '../../../examples/scene-camera-renderer/r3f/App.jsx';
import type { ExampleSlug } from '../../data/examples';

interface ExamplePreviewPageProps {
  slug: ExampleSlug;
}

const examplePreviewRegistry = {
  'animation-loop-to-useframe': animationLoopPreview,
  events: eventsPreview,
  lights: lightsPreview,
  'loading-models-and-textures': loadingPreview,
  'mesh-geometry-material': meshPreview,
  'scene-camera-renderer': scenePreview,
} satisfies Record<ExampleSlug, React.ComponentType>;

export default function ExamplePreviewPage({ slug }: ExamplePreviewPageProps) {
  const PreviewComponent = examplePreviewRegistry[slug];

  return <PreviewComponent />;
}
