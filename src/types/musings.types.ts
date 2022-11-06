import type {
  Section,
  Titled,
  Remarked,
  Linked,
  Named,
} from "_types/content.types";

export type Musings = {
  page: "Musings";
  sections: Section<Titled & Remarked & Linked>[];
} & Remarked &
  Named;
