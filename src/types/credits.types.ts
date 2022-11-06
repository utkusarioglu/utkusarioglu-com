import type { Section, Titled, Remarked, Entity, Named } from "./content.types";

export type CreditsTechStackItem = Titled & {
  value: string;
};

export type CreditsSourceCode = Titled &
  Remarked & {
    url: string;
  };

export type CreditsInspiration = Entity;

export type Credits = {
  page: "Credits";
  inspiration: CreditsInspiration;
  sourceCode: Section<CreditsSourceCode>;
  techStack: Section<CreditsTechStackItem>;
} & Named;
