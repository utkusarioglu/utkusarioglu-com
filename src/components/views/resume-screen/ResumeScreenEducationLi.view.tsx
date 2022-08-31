import { type FC } from "react";
import H3 from "_primitives/headings/H3.primitive";
import { type Education } from "_types/resume.types";
import ResumeScreenTableView from "./ResumeScreenTable.view";

type ResumeScreenEducationLiViewProps = Education;

const ResumeScreenEducationLiView: FC<ResumeScreenEducationLiViewProps> = ({
  title,
  institution,
  location,
  start,
  finish,
}) => (
  <div key={title}>
    <H3>{title}</H3>
    <ResumeScreenTableView
      table={{
        Institution: institution,
        Location: location,
        Start: start,
        Finish: finish,
      }}
    />
  </div>
);

export default ResumeScreenEducationLiView;
