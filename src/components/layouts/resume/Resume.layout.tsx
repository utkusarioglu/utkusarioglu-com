import { type FC, useEffect, useState } from "react";
import ResumePrintLayout from "./ResumePrint.layout";
import ResumeScreenLayout from "./ResumeScreen.layout";
import {
  type SpecialtyId,
  type Resume,
  type Specialties,
} from "_types/resume.types";

export interface ResumeLayoutProps {
  resume: Resume;
}

export interface SpecialtyReaderProps {
  activeSpecialtyId: SpecialtyId;
  specialties: Specialties;
}

const ResumeLayout: FC<ResumeLayoutProps> = ({ resume }) => {
  const [activeSpecialtyId, setActiveSpecialtyId] =
    useState<SpecialtyId>("all");

  return (
    <>
      <ResumeScreenLayout
        resume={resume}
        activeSpecialtyId={activeSpecialtyId}
        setActiveSpecialtyId={setActiveSpecialtyId}
      />
      <ResumePrintLayout
        resume={resume}
        activeSpecialtyId={activeSpecialtyId}
      />
    </>
  );
};

export default ResumeLayout;
