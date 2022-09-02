import type {
  Section,
  Titled,
  Remarked,
  Printable,
  Confided,
  Screenable,
  Entity,
} from "./content.types";

export type Skill = Titled & Partial<Remarked & Confided & Printable>;

type Skills = {
  map: {
    naturalLanguages: Section<Skill>;
    programmingLanguages: Section<Skill>;
    scriptingLanguages: Section<Skill>;
    frontend: Section<Skill>;
    devOpsAndCiCd: Section<Skill>;
    backend: Section<Skill>;
    testingAndAnalysis: Section<Skill>;
    projectHandling: Section<Skill>;
    web3: Section<Skill>;
    dataAndMath: Section<Skill>;
    developmentSoftware: Section<Skill>;
    notableOtherSoftware: Section<Skill>;
  };
} & Titled &
  Remarked;

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

export interface Resume {
  name: string;
  introduction: Introduction;
  contact: Section<ContactListItem>;
  skills: Skills;
  relevantWorkExperience: Section<WorkExperience>;
  relevantCertifications: Section<Certification>;
  education: Section<Education>;
}
