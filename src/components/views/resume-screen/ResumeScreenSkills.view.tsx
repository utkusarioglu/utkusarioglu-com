import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeScreenH2View from "./ResumeScreenH2.view";
import ResumeScreenSkillSectionLiView from "./ResumeScreenSkillsSectionLi.view";
import ResumeScreenSkillSectionView from "./ResumeScreenSkillsSection.view";

type ResumeScreenSkillsViewProps = Resume["skills"];

const ResumeScreenSkillsView: FC<ResumeScreenSkillsViewProps> = ({
  title,
  map,
}) => (
  <div>
    <ResumeScreenH2View className="px-5">{title}</ResumeScreenH2View>
    <div>
      {Object.values(map).map((section) => (
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
