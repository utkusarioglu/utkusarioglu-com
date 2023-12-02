import { type FC } from "react";
import { type ResumeCode } from "_hooks/resume/resume.hooks";
import c from "classnames";

interface ResumePrintResumeCodeViewProps {
  resumeCode: ResumeCode;
}

const ResumePrintResumeCodeView: FC<ResumePrintResumeCodeViewProps> = ({
  resumeCode,
}) => {
  return (
    <div
      className={c(
        "fixed top-[6px] right-1",
        "z-50 text-[2px] text-right leading-[2px]",
        "text-gray-100 font-[monospace]"
      )}
    >
      {resumeCode.map((section) => (
        <>
          <span>{section}</span>
          <br />
        </>
      ))}
    </div>
  );
};

export default ResumePrintResumeCodeView;
