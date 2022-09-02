import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import H2 from "_primitives/headings/H2.primitive";
import ResumeScreenSkillSectionLiView from "./ResumeScreenSkillsSectionLi.view";
import ResumeScreenSkillSectionView from "./ResumeScreenSkillsSection.view";

type ResumeScreenSkillsViewProps = Resume["skills"];

const ResumeScreenSkillsView: FC<ResumeScreenSkillsViewProps> = ({
  title,
  list,
}) => (
  <div>
    <H2 className="px-5">{title}</H2>
    <div>
      {list.map((section) => (
        <ContentCardItemLayout key={section.title}>
          <ResumeScreenSkillSectionView
            {...section}
            listItemComponent={({ item }) => (
              <ResumeScreenSkillSectionLiView {...item} />
            )}
          />
        </ContentCardItemLayout>
      ))}
    </div>
  </div>
);

export default ResumeScreenSkillsView;
