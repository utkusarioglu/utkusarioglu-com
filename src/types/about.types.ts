import { type Named } from "./content.types";

interface AboutParagraph {
  type: "paragraph";
  content: string;
}

interface AboutImage {
  type: "image";
  alt: string;
  credits: string;
  src: string;
}

type AboutItems = AboutParagraph | AboutImage;

export type About = {
  page: "About";
  items: AboutItems[];
} & Named;
