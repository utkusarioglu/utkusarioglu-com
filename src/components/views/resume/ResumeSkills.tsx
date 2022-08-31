import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeH2 from "./ResumeH2";
import ResumeSkillSectionLi from "./ResumeSkillsSectionLi";
import ResumeSkillSection from "./ResumeSkillsSection";

type ResumeSkillsProps = Resume["skills"];

const ResumeSkills: FC<ResumeSkillsProps> = ({ title, map }) => (
  <div>
    <ResumeH2 className="px-5">{title}</ResumeH2>
    <div>
      {Object.values(map).map((section) => (
        <ContentCardItemLayout key={section.title}>
          <ResumeSkillSection
            {...section}
            listItemComponent={({ item }) => <ResumeSkillSectionLi {...item} />}
          />
        </ContentCardItemLayout>
      ))}
    </div>
  </div>
);

export default ResumeSkills;
