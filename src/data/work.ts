import type { ImageMetadata } from 'astro';
import attachingPanels from '../assets/images/work/attaching-panels.jpeg';
import betweenPanels from '../assets/images/work/between-panels.jpeg';
import cuttingPanels from '../assets/images/work/cutting-panels.jpeg';
import cuttingTopHat from '../assets/images/work/cutting-top-hat.jpeg';
import panelsOverWindow from '../assets/images/work/panels-over-window.jpeg';
import poolsideWall from '../assets/images/work/poolside-wall.jpeg';
import sealingJoints from '../assets/images/work/sealing-joints.jpeg';
import secondStorey from '../assets/images/work/second-storey.jpeg';
import wallDetail from '../assets/images/work/wall-detail.jpeg';
import wallReady from '../assets/images/work/wall-ready-for-finishing.jpeg';
import windowDetail from '../assets/images/work/window-detail.jpeg';

export type WorkPhoto = {
  src: ImageMetadata;
  caption: string;
  alt: string;
};

export const workPhotos: WorkPhoto[] = [
  {
    src: cuttingPanels,
    caption: 'Cutting panels to size',
    alt: 'Ichiban Cladding worker in orange hi-vis cutting a Hebel panel with a circular saw',
  },
  {
    src: cuttingTopHat,
    caption: 'Cutting top-hat battens',
    alt: 'Worker cutting a steel top-hat batten with an angle grinder, sparks flying',
  },
  {
    src: attachingPanels,
    caption: 'Fixing panels to the frame',
    alt: 'Worker fixing a Hebel panel to a wall frame from scaffolding',
  },
  {
    src: panelsOverWindow,
    caption: 'Panels around window openings',
    alt: 'Worker mounting a Hebel panel above a window opening',
  },
  {
    src: sealingJoints,
    caption: 'Sealing panel joints',
    alt: 'Worker applying patching compound to Hebel panel intersections',
  },
  {
    src: secondStorey,
    caption: 'Second-storey install',
    alt: 'Second-storey Hebel wall in progress with scaffolding and house wrap',
  },
  {
    src: betweenPanels,
    caption: 'Working between the panels',
    alt: 'Worker walking along scaffolding between Hebel panels',
  },
  {
    src: wallReady,
    caption: 'Wall ready for finishing',
    alt: 'Unpainted Hebel wall with a window opening and patched joints',
  },
  {
    src: wallDetail,
    caption: 'Fixings and joints detail',
    alt: 'Close-up of a newly installed Hebel wall showing screw fixings and joints',
  },
  {
    src: windowDetail,
    caption: 'Panels around a window',
    alt: 'New Hebel wall with a window opening, ready for finishing',
  },
  {
    src: poolsideWall,
    caption: 'Poolside Hebel wall',
    alt: 'Hebel boundary wall installed alongside a swimming pool',
  },
];
