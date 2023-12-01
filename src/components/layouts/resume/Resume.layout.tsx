import { type FC } from "react";
import ResumePrintLayout from "./ResumePrint.layout";
import ResumeScreenLayout from "./ResumeScreen.layout";
import {
  type SpecialtyId,
  type Resume,
  type Specialties,
} from "_types/resume.types";
import { useResumeCustomization } from "_hooks/resume/resume.hooks";

export interface SpecialtyReaderProps {
  activeSpecialtyId: SpecialtyId;
  specialties: Specialties;
}

export interface ResumeLayoutProps {
  resume: Resume;
}

const ResumeLayout: FC<ResumeLayoutProps> = ({ resume }) => {
  const {
    activeSpecialtyId,
    setActiveSpecialtyId,
    resumeCode,
    includePhoto,
    setIncludePhoto,
    activePaperFormatShortCode,
  } = useResumeCustomization(resume);

  return (
    <>
      <ResumeScreenLayout
        {...{
          resume,
          activeSpecialtyId,
          setActiveSpecialtyId,
          includePhoto,
          setIncludePhoto,
        }}
      />
      <ResumePrintLayout
        {...{
          resume,
          activeSpecialtyId,
          includePhoto,
          resumeCode,
          activePaperFormatShortCode,
        }}
      />
    </>
  );
};

export default ResumeLayout;
