export type Section<ListType> = {
  title: string;
  list: ListType[];
  print?: boolean;
};

export interface Skill {
  name: string;
  remarks?: string;
  confident?: boolean;
  print?: boolean;
}

interface Skills {
  title: string;
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
}

export interface ContactListItem {
  title: string;
  value: string;
  handle?: string;
  remarks?: string;
  print?: boolean;
  screen?: boolean;
}

export interface WorkExperience {
  title: string;
  companyName: string;
  location: string;
  start: string;
  finish: string;
  remarks: string[];
}

export interface Certification {
  course: string;
  institution: string;
  instructor: string;
  certificateId?: string;
  certificateUrl?: string;
  print?: boolean;
}

export interface Education {
  title: string;
  institution: string;
  location: string;
  start: number;
  finish: number;
}

interface Introduction {
  title: string;
  remarks: string[];
}

export interface Resume {
  name: string;
  introduction: Introduction;
  contact: Section<ContactListItem>;
  skills: Skills;
  relevantWorkExperience: Section<WorkExperience>;
  relevantCertifications: Section<Certification>;
  education: Section<Education>;
}
