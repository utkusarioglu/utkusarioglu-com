import { type FC } from "react";
import ResumeScreenH3View from "./ResumeScreenH3.view";
import { type WorkExperience } from "_types/resume.types";
import ResumeScreenTableView from "./ResumeScreenTable.view";
import ContentCardParagraphView from "_views/content-card/ContentCardParagraph.view";

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
        <ContentCardParagraphView key={paragraph}>
          {paragraph}
        </ContentCardParagraphView>
      ))}
    </div>
  );
};

export default ResumeScreenWorkExperienceLiView;
