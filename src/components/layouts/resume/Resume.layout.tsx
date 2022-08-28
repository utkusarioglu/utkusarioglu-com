import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumePrintLayout from "./ResumePrint.layout";
import ResumeScreenLayout from "./ResumeScreen.layout";

export interface ResumeLayoutProps {
  resume: Resume;
}

const ResumeLayout: FC<ResumeLayoutProps> = ({ resume }) => {
  return (
    <>
      <ResumeScreenLayout resume={resume} />
      <ResumePrintLayout resume={resume} />
    </>
  );
};

export default ResumeLayout;
