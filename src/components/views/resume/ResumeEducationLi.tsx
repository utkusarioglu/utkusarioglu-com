import { type FC } from "react";
import ResumeH3 from "./ResumeH3";
import { type Education } from "_types/resume.types";
import ResumeTable from "./ResumeTable";

type ResumeEducationLiProps = Education;

const ResumeEducationLi: FC<ResumeEducationLiProps> = ({
  title,
  institution,
  location,
  start,
  finish,
}) => (
  <div key={title}>
    <ResumeH3>{title}</ResumeH3>
    <ResumeTable
      table={{
        Institution: institution,
        Location: location,
        Start: start,
        Finish: finish,
      }}
    />
    {/* <div className={[COLORS.paragraph].join(" ")}>
      {institution} at {location}
    </div>
    <div className={[COLORS.paragraph].join(" ")}>
      from {start} to {finish}
    </div> */}
  </div>
);

export default ResumeEducationLi;
