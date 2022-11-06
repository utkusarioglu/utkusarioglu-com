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

type Skills = Titled & Remarked & Listed<Section<Skill>>;

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

export type Resume = {
  page: "Resume";
  introduction: Introduction;
  contact: Section<ContactListItem>;
  skills: Skills;
  relevantWorkExperience: Section<WorkExperience>;
  relevantCertifications: Section<Certification>;
  education: Section<Education>;
} & Named;
