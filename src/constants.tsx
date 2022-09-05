import type { INavItem } from "_views/nav-item/NavItem.view.types";
import { type PerlinPresets } from "_contexts/canvas/Canvas.context.types";
import { type MotionVariantRecord } from "_types/vendors/framer-motion.types";
import type { LayoutSlice } from "_contexts/layout/Layout.context.types";

export const DEFAULT_LAYOUT: LayoutSlice = {
  navigation: true,
  canvas: true,
  content: true,
  imageViewer: false,
  contentMask: true,
};

export const PATH_SEPARATOR = "/";

export const ROUTE_PROPS: INavItem[] = [
  {
    title: "About",
    type: "page",
    href: "/about",
    show: true,
    layout: {
      canvas: true,
      content: true,
      navigation: true,
      contentMask: true,
    },
  },
  {
    title: "Resume",
    type: "page",
    href: "/resume",
    show: true,
    layout: {
      canvas: true,
      content: true,
      navigation: true,
      contentMask: true,
    },
  },
  {
    title: "Musings",
    type: "page",
    href: "/musings",
    show: true,
    layout: {
      canvas: true,
      content: true,
      navigation: true,
      contentMask: true,
    },
  },
  {
    title: "Canvas",
    type: "page",
    href: "/canvas",
    show: false,
    layout: {
      canvas: true,
      content: true,
      navigation: true,
      contentMask: false,
    },
  },
  {
    title: "Credits",
    type: "page",
    href: "/credits",
    show: false,
    layout: {
      canvas: true,
      content: true,
      navigation: true,
      contentMask: true,
    },
  },
  {
    title: "Artsy",
    type: "page",
    href: "/musings/artsy",
    show: false,
    layout: {
      canvas: false,
      content: true,
      navigation: false,
      contentMask: false,
    },
  },
  {
    title: "Paper Chain",
    type: "page",
    href: "/musings/paper-chain",
    show: false,
    layout: {
      canvas: false,
      content: true,
      navigation: true,
      contentMask: true,
    },
  },
  {
    title: "Kamyon",
    type: "page",
    href: "/musings/kamyon",
    show: false,
    layout: {
      canvas: false,
      content: true,
      navigation: false,
      contentMask: false,
    },
  },
  {
    title: "LinkedIn",
    type: "social",
    href: "https://www.linkedin.com/in/utku-sarioglu",
  },
  {
    title: "Instagram",
    type: "social",
    href: "https://www.instagram.com/utkusarioglu",
  },
  {
    title: "Twitter",
    type: "social",
    href: "https://www.twitter.com/utkusarioglu",
  },
];

export const HEX = {
  brand: process.env.BRAND,
  base: {
    dark: process.env.BASE_DARK,
    light: process.env.BASE_LIGHT,
  },
};

export const COLORS = {
  bg: "bg-base-light dark:bg-base-dark transition-colors",
  page: "text-primary-light dark:text-primary-dark transition-colors",
  pageFill: "fill-primary-light dark:fill-primary-dark transition-colors",
  social: "text-secondary-light dark:text-secondary-dark transition-colors",

  title: "text-neutral-700 dark:text-neutral-300 transition-colors",
  route: "text-neutral-500 dark:text-neutral-400 transition-colors",

  extra: "text-neutral-500",
  extraFill: "fill-neutral-500",

  paragraph: "text-black dark:text-white transition-colors",
  print: "print:text-black print:dark:text-black",
  printBg: "print:bg-white print:dark:bg-white",
  sectionHelpBorder: "border-neutral-400",
  secondaryText: "text-neutral-700 dark:text-neutral-500 transition-colors",
  secondaryFill: "fill-neutral-700 dark:fill-neutral-500 transition-colors",
  windowTitle: "bg-white/70 dark:bg-black/70 transition-colors",
  scrollbar:
    "scrollbar-thumb-neutral-300 dark:scrollbar-thumb-neutral-800 scrollbar-track-transparent transition-colors",

  canvasControlsBg:
    "bg-neutral-200/80 dark:bg-neutral-900/80 transition-colors",
  canvasControlBorder:
    "dark:border-neutral-300 dark:border-neutral-600 transition-colors",
  canvasControlInput:
    "bg-neutral-300/70 dark:bg-neutral-800/70 transition-colors",
  canvasControlInputSelected:
    "bg-neutral-400/70 dark:bg-neutral-700/70 transition-colors",

  secondaryButton: "bg-neutral-300",
  primaryButton: "bg-blue-400",
};

export const TRANSITIONS = {
  route: {
    ease: "easeInOut",
    duration: 0.4,
    // duration: 2,
  },
  routeFast: {
    ease: "easeInOut",
    duration: 0.3,
  },
  slow: {
    ease: "easeInOut",
    duration: 3,
  },
};

const ONE = "rgba(0, 0, 0, 1)";
const ZERO = "rgba(0, 0, 0, 0)";
const O5 = "rgba(0, 0, 0, 0.5)";
const O3 = "rgba(0, 0, 0, 0.3)";
const O2 = "rgba(0, 0, 0, 0.2)";
const O1 = "rgba(0, 0, 0, 0.1)";
const OO5 = "rgba(0, 0, 0, 0.05)";

export const MASKS = {
  horizontalTransparent: `linear-gradient(90deg, ${ZERO}, ${ZERO}, ${ZERO}, ${ZERO}, ${ZERO})`,
  horizontalOpaque: `linear-gradient(90deg, ${ONE}, ${ONE}, ${ONE}, ${ONE}, ${ONE})`,
  leftBleed: `linear-gradient(90deg, ${OO5}, ${O2}, ${O2}, ${O2}, ${O5})`,
  verticalOpaque: `linear-gradient(0deg, ${ONE} 55px, ${ONE} 75px, ${ONE} calc(100% - 85px), ${ONE} calc(100% - 65px))`,
  verticalTransparent: `linear-gradient(0deg, ${ZERO} 55px, ${ZERO} 75px, ${ZERO} calc(100% - 85px), ${ZERO} calc(100% - 65px))`,
  nav: `linear-gradient(90deg, ${ZERO} 0%, ${ONE} 1.25rem, ${ONE} calc(100% - 1.25rem), ${ZERO} 100%`,
  homeBg: `linear-gradient(90deg, ${ONE}, ${O3}, ${OO5}, ${O3}, ${ONE})`,
  canvasBgH: `linear-gradient(90deg, ${O1}, ${ONE}, ${ONE}, ${ONE}, ${ONE})`,
  canvasSmV: `linear-gradient(0deg, ${O5} 55px, ${ONE} 75px, ${ONE} calc(100% - 85px), ${O1} calc(100% - 65px))`,
  notHomeSmV: `linear-gradient(0deg, ${O1} 55px, ${O2} 75px, ${O2} calc(100% - 85px), ${O1} calc(100% - 65px))`,
  content: `linear-gradient(0deg, ${ZERO} 55px, ${ONE} 60px, ${ONE} calc(100% - 65px), ${ZERO} calc(100% - 60px))`,
};

export const TRANSPARENT_MASK = [
  MASKS.horizontalTransparent,
  MASKS.verticalTransparent,
].join(", ");

export const CANVAS_CONTROLS = [
  {
    title: "Render",
    items: [
      {
        name: "maxDuration",
        label: "Max Duration",
        unit: "ms",
        type: "number",
        min: 1,
        max: 60000,
        help: [
          "Max duration sets the maximum milliseconds that the render is allowed to run.",
          "This setting allows drawing short lines that do not reach the ends of the viewport.",
          "The render may finalize before the set time if all the particles hit the boundaries of the viewport.",
        ],
      },
    ],
  },
  {
    title: "Curve",
    items: [
      {
        name: "seed",
        label: "Seed",
        unit: "",
        type: "number",
        help: [
          "Seed is a random number that determines the shape of the curves.",
        ],
      },
      {
        name: "freq",
        label: "Frequency",
        unit: "rad",
        min: "1",
        max: "10000",
        help: [
          "Frequency sets the radius of curvature of the curves.",
          "Lower values produce a curlier output and more frequent changes in hue.",
        ],
      },
    ],
  },
  {
    title: "Particles",
    items: [
      {
        name: "particleCount",
        label: "Count",
        unit: "",
        type: "number",
        min: 1,
        max: 10000,
        help: [
          "Particle count determines the number of particles that will create the drawing.",
          "Higher values produce a busier render and may slow down your device.",
        ],
      },
      {
        name: "particleSize",
        label: "Size",
        unit: "px",
        type: "range",
        min: 1,
        max: 10,
        help: [
          "Particle size sets the width and height of the leading squares that trace the lines.",
          "Bigger values produce thicker lines.",
        ],
      },
    ],
  },
  {
    title: "HSL",
    items: [
      {
        name: "hueOffset",
        label: "Hue Offset",
        unit: "°",
        type: "range",
        min: 0,
        max: 360,
        help: ["Hue start offset sets the start hue for the lines."],
      },
      {
        name: "hueRange",
        label: "Hue Range",
        unit: "°",
        type: "range",
        min: 0,
        max: 360,
        help: ["Hue range sets the range of colors that the lines can use."],
      },
      {
        name: "saturation",
        label: "Saturation",
        unit: "%",
        type: "range",
        min: 0,
        max: 100,
        help: ["Saturation sets the intensity of the color."],
      },
      {
        name: "luminance",
        label: "Luminance",
        unit: "%",
        type: "range",
        min: 0,
        max: 100,
        help: [
          "Luminance sets the blackness or whiteness of the color.",
          "50% produces the liveliest colors.",
        ],
      },
    ],
  },
];

export const APP_NAME = process.env.APP_NAME;
export const DOMAIN = process.env.DOMAIN;
export const APP_ADDRESS = `https://${process.env.SUBDOMAIN}.${process.env.DOMAIN}`;
export const APP_DESCRIPTION = process.env.APP_DESCRIPTION;
export const TWITTER_HANDLE = "@utkusarioglu";

export const PERLIN_PRESETS: PerlinPresets = {
  // light: {
  //   name: "Light theme default",
  //   hueOffset: 200,
  //   hueRange: 40,
  //   freq: 700,
  //   particleCount: 200,
  //   particleSize: 1,
  //   saturation: 100,
  //   luminance: 40,
  //   maxDuration: 30000,
  // },
  light: {
    name: "Thin gray lines (light theme default)",
    hueOffset: 0,
    hueRange: 360,
    freq: 1000,
    particleCount: 400,
    particleSize: 1,
    saturation: 0,
    luminance: 70,
    maxDuration: 30000,
  },
  dark: {
    name: "Thin black lines (dark theme default)",
    hueOffset: 0,
    hueRange: 360,
    freq: 1000,
    particleCount: 400,
    particleSize: 1,
    saturation: 0,
    luminance: 0,
    maxDuration: 30000,
  },
  allTheBlues: {
    // name: "Dark theme default",
    name: "Blue marble",
    hueOffset: 200,
    hueRange: 70,
    freq: 6000,
    particleCount: 200,
    particleSize: 1,
    saturation: 100,
    luminance: 50,
    maxDuration: 30000,
  },
  vibrant: {
    name: "Vibrant",
    hueOffset: 0,
    hueRange: 360,
    freq: 800,
    particleCount: 200,
    particleSize: 1.5,
    saturation: 100,
    luminance: 50,
    maxDuration: 30000,
  },
  thickBlackLines: {
    name: "Thick black lines",
    hueOffset: 0,
    hueRange: 360,
    freq: 3000,
    particleCount: 30,
    particleSize: 5,
    saturation: 0,
    luminance: 0,
    maxDuration: 30000,
  },
  physarumPolycephalum: {
    name: "Physarum polycephalum",
    hueOffset: 46,
    hueRange: 20,
    freq: 20,
    particleCount: 2000,
    particleSize: 0.1,
    saturation: 100,
    luminance: 50,
    maxDuration: 60000,
  },
  drawMeLikeOneOfYourFrenchCurves: {
    name: "Draw me like one of your French curves",
    hueOffset: 189,
    hueRange: 37,
    freq: 2000,
    particleCount: 20,
    particleSize: 10,
    saturation: 25,
    luminance: 16,
    maxDuration: 30000,
  },
  drunkWindowsPipes: {
    name: "Drunk Windows Pipes",
    hueOffset: 137,
    hueRange: 75,
    freq: 50,
    particleCount: 30,
    particleSize: 10,
    saturation: 100,
    luminance: 50,
    maxDuration: 30000,
  },
  loveSeatInHyperspace: {
    name: "Love seat in hyperspace",
    hueOffset: 0,
    hueRange: 60,
    freq: 600,
    particleCount: 2,
    particleSize: 200,
    saturation: 100,
    luminance: 50,
    maxDuration: 30000,
  },
  asSmoothAsSilk: {
    name: "As smooth as silk",
    hueOffset: 0,
    hueRange: 50,
    freq: 1500,
    particleCount: 2000,
    particleSize: 0.2,
    saturation: 0,
    luminance: 100,
    maxDuration: 60000,
  },
};

export const MOTION_VARIANTS: MotionVariantRecord<"div"> = {
  opacity: {
    none: { opacity: 0 },
    full: { opacity: 1 },
    o7: { opacity: 0.7 },
  },
};

export const IMG_ZOOM_MARGIN = +process.env.IMG_ZOOM_MARGIN;
export const IMG_MAXIMIZED_BORDER_RADIUS = 20;
export const CONTENT_ANIMATION_Y_DRIFT = 100;
export const MAX_W_CONTENT = +process.env.MAX_W_CONTENT;
export const RESUME_PRINT_Y_GAP_CLASS = "gap-y-3";
