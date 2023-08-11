import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeScreenSkillSectionLiView from "./ResumeScreenSkillsSectionLi.view";
import ResumeScreenSkillSectionView from "./ResumeScreenSkillsSection.view";
import ContentCardTitleBannerView from "_views/content-card/ContentCardTitleBanner.view";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";
import { getActiveSpecialty, computeItemDisplay } from "_utils/resume.utils";

type ResumeScreenSkillsViewProps = Resume["skills"] & SpecialtyReaderProps;

const ResumeScreenSkillsView: FC<ResumeScreenSkillsViewProps> = ({
  title,
  list,
  activeSpecialtyId,
  specialties,
}) => {
  const activeSpecialty = getActiveSpecialty(specialties, activeSpecialtyId);

  return (
    <div>
      <ContentCardTitleBannerView
        title={title}
        subtitle={activeSpecialty.title}
      />
      <div>
        {list.map((section) => (
          <ContentCardItemLayout key={section.title}>
            <ResumeScreenSkillSectionView
              {...section}
              listItemComponent={({ item }) => {
                return computeItemDisplay(item, activeSpecialty.id) ? (
                  <ResumeScreenSkillSectionLiView {...item} />
                ) : null;
              }}
            />
          </ContentCardItemLayout>
        ))}
      </div>
    </div>
  );
};

export default ResumeScreenSkillsView;
