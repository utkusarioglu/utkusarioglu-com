import type { Section, Titled, Remarked, Linked } from "_types/content.types";

export type Musings = {
  sections: Section<Titled & Remarked & Linked>[];
} & Remarked;
