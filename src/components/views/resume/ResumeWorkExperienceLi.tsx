import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeH3 from "./ResumeH3";
import { type WorkExperience } from "_types/resume.types";
import ResumeTable from "./ResumeTable";

type ResumeWorkExperienceLiProps = WorkExperience;

const ResumeWorkExperienceLi: FC<ResumeWorkExperienceLiProps> = ({
  companyName,
  location,
  title,
  start,
  finish,
  remarks,
}) => {
  return (
    <div>
      <ResumeH3>{title}</ResumeH3>
      <ResumeTable
        table={{
          Company: companyName,
          Location: location,
          Start: start,
          Finish: finish,
        }}
      />
      {remarks.map((paragraph) => (
        <p
          key={paragraph}
          className={[COLORS.paragraph, "mb-3 last:mb-0"].join(" ")}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ResumeWorkExperienceLi;