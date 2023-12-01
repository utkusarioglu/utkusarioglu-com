import type {
  Section,
  Titled,
  Remarked,
  Printable,
  Confided,
  Screenable,
  Entity,
  Listed,
  Named,
} from "./content.types";

export type Skill = Titled & Partial<Remarked & Confided & Printable>;

export type SkillSection = Section<Skill>;

type Skills = Titled & Remarked & Listed<SkillSection>;

export type ContactListItem = {
  value: string;
  handle?: string;
} & Titled &
  Partial<Remarked & Printable & Screenable>;

export type WorkExperience = {
  companyName: string;
  location: string;
  start: string;
  finish: string;
} & Titled &
  Remarked &
  Partial<Printable>;

export type Certification = {
  course: string;
  institution: string;
  instructor: string;
  certificateId?: string;
  certificateUrl?: string;
} & Partial<Printable>;

export type Education = {
  institution: string;
  location: string;
  start: number;
  finish: number;
} & Titled;

type Introduction = Entity;

export type SpecialtyId = "al" | "fe" | "be" | "fs" | "w3";
export type SpecialtyIdList = SpecialtyId[];

export type Specialty = {
  id: SpecialtyId;
} & Titled &
  Remarked;

export type PaperStyles = {
  id: SpecialtyId;
  paperFormatShortCode: PaperFormatShortCode;
  styles: {
    header: {
      clearance: {
        height: number | string;
      };
    };
    h2: {
      marginBottom: number | string;
    };
    layout: {
      templateColumns: string;
      columnGap: string;
    };
    relevantWorkExperience: {
      ol: {
        gap: number | string;
      };
      li: {
        divider: {
          height: number | string;
        };
      };
    };
    skills: {
      ol: {
        gap: number | string;
      };
      li: {
        divider: {
          height: number | string;
        };
      };
    };
    education: {
      ol: {
        gap: number | string;
      };
    };
  };
};

export type Specialties = Specialty[];

export type PaperFormatSearchQueryValue = "a4" | "letter" | "unspecified";
export type PaperFormatShortCode = "4" | "l" | "-";

export type PaperFormat = Titled &
  Remarked & {
    shortCode: PaperFormatShortCode;
    searchQueryValue: PaperFormatSearchQueryValue;
    margins: {
      x: number;
      y: number;
    };
  };

interface IncludePhoto {
  state: boolean;
  searchQueryValue: "true" | "false";
  shortCode: "p" | "n";
}

interface Variants {
  specialties: Specialties;
  paperStyles: PaperStyles[];
  paperFormats: PaperFormat[];
  includePhoto: IncludePhoto[];
}

export type Resume = {
  page: "Resume";
  variants: Variants;
  introduction: Introduction;
  contact: Section<ContactListItem>;
  skills: Skills;
  relevantWorkExperience: Section<WorkExperience>;
  relevantCertifications: Section<Certification>;
  education: Section<Education>;
} & Named;
