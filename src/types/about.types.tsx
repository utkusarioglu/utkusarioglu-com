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
  name: string;
  items: AboutItems[];
};
export interface AboutPageProps {
  about: About;
}
