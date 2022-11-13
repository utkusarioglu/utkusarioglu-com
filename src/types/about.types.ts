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

interface AboutHeading2 {
  type: "heading-2";
  content: string;
}

type AboutItems = AboutParagraph | AboutImage | AboutHeading2;

export type About = {
  page: "About";
  items: AboutItems[];
} & Named;
