import { type INavItem } from "_views/nav-item/NavItem.view.types";
import { type PerlinPresets } from "_hooks/perlin/perlin.hook.types";

export const ROUTE_PROPS: INavItem[] = [
  {
    title: "About",
    type: "page",
    href: "/about",
    show: true,
  },
  {
    title: "Resume",
    type: "page",
    href: "/resume",
    show: true,
  },
  {
    title: "Musings",
    type: "page",
    href: "/musings",
    show: true,
  },
  {
    title: "Canvas",
    type: "page",
    href: "/canvas",
    show: false,
  },
  {
    title: "Credits",
    type: "page",
    href: "/credits",
    show: false,
  },
  {
    title: "LinkedIn",
    type: "social",
    href: "https://www.linkedin.com/in/utku-sarioglu",
    show: true,
  },
  {
    title: "Instagram",
    type: "social",
    href: "https://www.instagram.com/utkusarioglu",
    show: true,
  },
  {
    title: "Twitter",
    type: "social",
    href: "https://www.twitter.com/utkusarioglu",
    show: true,
  },
];

export const COLORS = {
  /**
   * If you change this, also change it in:
   * - public/browserconfig.xml
   * - public/manifest.json
   */
  theme: "#f59e0b",
  bg: "bg-neutral-200 dark:bg-neutral-900 transition-colors",
  // bgDarker: "bg-neutral-500 dark:bg-[#090909] transition-colors",
  bgDarker: "bg-neutral-200 dark:bg-neutral-900 transition-colors",
  title: "text-neutral-900 dark:text-neutral-300 transition-colors",
  route: "text-neutral-600 dark:text-neutral-400 transition-colors",
  page: "text-amber-500 transition-colors",
  pageFill: "fill-amber-500 dark:fill-amber-500 transition-colors",
  social: "text-sky-500 dark:text-sky-300 transition-colors",
  extra: "text-neutral-500 dark:text-neutral-500 transition-colors",
  extraFill: "fill-neutral-500 dark:fill-neutral-500 transition-colors",
  paragraph: "text-black dark:text-white transition-colors",
  sectionHelpBorder: "border-black dark:border-white transition-colors",
  secondaryText: "text-neutral-700 dark:text-neutral-500",
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
  secondaryButton: "text-black bg-neutral-300",
  primaryButton: "text-black bg-blue-400",
};

export const TRANSITIONS = {
  route: {
    ease: "easeInOut",
    duration: 0.4,
    // duration: 4,
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
  content: `linear-gradient(0deg, ${ZERO} 55px, ${ONE} 65px, ${ONE} calc(100% - 65px), ${ZERO} calc(100% - 55px))`,
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
        help: "Max miliseconds that the render is allowed to run. The render may finalize before the set time if all the particles hit the boundaries of the viewport",
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
        help: "A random number that determines the shape of the curves",
      },
      {
        name: "freq",
        label: "Frequency",
        unit: "rad",
        min: "1",
        max: "10000",
        help: "Radius of curvature of the curves. Lower values produce a curlier output and more frequent changes in color hue",
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
        help: "Number of particles used for render. Higher values produce a busier render and may slow down your device.",
      },
      {
        name: "particleSize",
        label: "Size",
        unit: "px",
        type: "range",
        min: 1,
        max: 10,
        help: "Size of the particles. Bigger values produce thicker lines",
      },
    ],
  },
  {
    title: "Hue",
    items: [
      {
        name: "hueOffset",
        label: "Offset",
        unit: "°",
        type: "range",
        min: 0,
        max: 360,
        help: "Start offset of the hue value",
      },
      {
        name: "hueRange",
        label: "Range",
        unit: "°",
        type: "range",
        min: 0,
        max: 360,
        help: "Range for the hue value",
      },
    ],
  },
  {
    title: "Intensity",
    items: [
      {
        name: "saturation",
        label: "Saturation",
        unit: "%",
        type: "range",
        min: 0,
        max: 100,
        help: "Color saturation",
      },
      {
        name: "luminance",
        label: "Luminance",
        unit: "%",
        type: "range",
        min: 0,
        max: 100,
        help: "Blackness or whiteness of the curves. 50% produces the liveliest colors",
      },
    ],
  },
];

export const APP_NAME = "Utku Sarioglu";
export const APP_DESCRIPTION = "Utku Sarioglu's personal website";
export const APP_ADDRESS = "https://www.utkusarioglu.com";
export const TWITTER_HANDLE = "@utkusarioglu";

export const PERLIN_PRESETS: PerlinPresets = {
  light: {
    name: "Light theme default",
    hueOffset: 0,
    hueRange: 360,
    freq: 800,
    particleCount: 200,
    particleSize: 1.5,
    saturation: 100,
    luminance: 70,
    maxDuration: 30000,
  },
  dark: {
    name: "Dark theme default",
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
    freq: 1500,
    particleCount: 30,
    particleSize: 5,
    saturation: 0,
    luminance: 0,
    maxDuration: 30000,
  },
  thinBlackLines: {
    name: "Thin black lines",
    hueOffset: 0,
    hueRange: 360,
    freq: 1000,
    particleCount: 400,
    particleSize: 1,
    saturation: 0,
    luminance: 0,
    maxDuration: 30000,
  },
  blueMarble: {
    name: "Blue Marble",
    hueOffset: 216,
    hueRange: 160,
    freq: 2000,
    particleCount: 500,
    particleSize: 1,
    saturation: 100,
    luminance: 50,
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
};
