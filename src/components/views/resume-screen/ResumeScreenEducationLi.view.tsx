import { type FC } from "react";
import ResumeScreenH3View from "./ResumeScreenH3.view";
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
    <ResumeScreenH3View>{title}</ResumeScreenH3View>
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
