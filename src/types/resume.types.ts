interface NaturalLanguage {
  name: string;
  level: string;
}

type Section<ListType> = {
  title: string;
  list: ListType[];
};

interface Skills {
  naturalLanguages: Section<NaturalLanguage>;
  programmingLanguages: Section<string>;
  scriptingLanguages: Section<string>;
  frontend: Section<string>;
  devOpsAndCiCd: Section<string>;
  backend: Section<string>;
  testingAndAnalysis: Section<string>;
  projectHandling: Section<string>;
  web3: Section<string>;
  dataAndMath: Section<string>;
  developmentSoftware: Section<string>;
  notableOtherSoftware: Section<string>;
}

interface ContactChannel {
  name: string;
  link: string;
}

interface WorkExperience {
  title: string;
  companyName: string;
  location: string;
  start: string;
  finish: string;
  remarks: string;
}

interface Certification {
  course: string;
  institution: string;
  instructor: string;
  certificateId: string;
}

interface Education {
  title: string;
  institution: string;
  location: string;
  start: number;
  finish: number;
}

interface Introduction {
  title: string;
  remarks: string;
}

export interface Resume {
  name: string;
  introduction: Introduction;
  contactChannels: Section<ContactChannel>;
  skills: Skills;
  relevantWorkExperience: Section<WorkExperience>;
  relevantCertifications: Section<Certification>;
  education: Section<Education>;
}
