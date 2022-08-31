import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeScreenH3View from "./ResumeScreenH3.view";
import { type WorkExperience } from "_types/resume.types";
import ResumeScreenTableView from "./ResumeScreenTable.view";
import c from "classnames";

type ResumeScreenWorkExperienceLiViewProps = WorkExperience;

const ResumeScreenWorkExperienceLiView: FC<
  ResumeScreenWorkExperienceLiViewProps
> = ({ companyName, location, title, start, finish, remarks }) => {
  return (
    <div>
      <ResumeScreenH3View>{title}</ResumeScreenH3View>
      <ResumeScreenTableView
        table={{
          Company: companyName,
          Location: location,
          Start: start,
          Finish: finish,
        }}
      />
      {remarks.map((paragraph) => (
        <p key={paragraph} className={c(COLORS.paragraph, "mb-3 last:mb-0")}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default ResumeScreenWorkExperienceLiView;
