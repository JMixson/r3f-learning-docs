import animationLoopMetaJson from '../../examples/animation-loop-to-useframe/meta.json';
import animationLoopThreeCode from '../../examples/animation-loop-to-useframe/three/main.js?raw';
import animationLoopR3fCode from '../../examples/animation-loop-to-useframe/r3f/App.jsx?raw';
import eventsMetaJson from '../../examples/events/meta.json';
import eventsThreeCode from '../../examples/events/three/main.js?raw';
import eventsR3fCode from '../../examples/events/r3f/App.jsx?raw';
import lightsMetaJson from '../../examples/lights/meta.json';
import lightsThreeCode from '../../examples/lights/three/main.js?raw';
import lightsR3fCode from '../../examples/lights/r3f/App.jsx?raw';
import loadingMetaJson from '../../examples/loading-models-and-textures/meta.json';
import loadingThreeCode from '../../examples/loading-models-and-textures/three/main.js?raw';
import loadingR3fCode from '../../examples/loading-models-and-textures/r3f/App.jsx?raw';
import meshMetaJson from '../../examples/mesh-geometry-material/meta.json';
import meshThreeCode from '../../examples/mesh-geometry-material/three/main.js?raw';
import meshR3fCode from '../../examples/mesh-geometry-material/r3f/App.jsx?raw';
import sceneMetaJson from '../../examples/scene-camera-renderer/meta.json';
import sceneThreeCode from '../../examples/scene-camera-renderer/three/main.js?raw';
import sceneR3fCode from '../../examples/scene-camera-renderer/r3f/App.jsx?raw';

export interface ExampleMeta {
  title: string;
  slug: string;
  summary: string;
  versions: Record<string, string>;
  threeSandboxUrl: string;
  r3fSandboxUrl: string;
}

export interface ExampleEntry {
  meta: ExampleMeta;
  threeCode: string;
  r3fCode: string;
}

const exampleRegistry = {
  'animation-loop-to-useframe': {
    meta: animationLoopMetaJson as ExampleMeta,
    threeCode: animationLoopThreeCode,
    r3fCode: animationLoopR3fCode,
  },
  events: {
    meta: eventsMetaJson as ExampleMeta,
    threeCode: eventsThreeCode,
    r3fCode: eventsR3fCode,
  },
  lights: {
    meta: lightsMetaJson as ExampleMeta,
    threeCode: lightsThreeCode,
    r3fCode: lightsR3fCode,
  },
  'loading-models-and-textures': {
    meta: loadingMetaJson as ExampleMeta,
    threeCode: loadingThreeCode,
    r3fCode: loadingR3fCode,
  },
  'mesh-geometry-material': {
    meta: meshMetaJson as ExampleMeta,
    threeCode: meshThreeCode,
    r3fCode: meshR3fCode,
  },
  'scene-camera-renderer': {
    meta: sceneMetaJson as ExampleMeta,
    threeCode: sceneThreeCode,
    r3fCode: sceneR3fCode,
  },
} satisfies Record<string, ExampleEntry>;

export type ExampleSlug = keyof typeof exampleRegistry;
export const exampleSlugs = Object.keys(exampleRegistry) as ExampleSlug[];

export function getExample(slug: ExampleSlug) {
  return exampleRegistry[slug];
}

export const pinnedVersions = exampleRegistry['scene-camera-renderer'].meta.versions;
