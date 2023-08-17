import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ContentCardListView from "_views/content-card/ContentCardList.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeScreenSkillSectionLiView from "./ResumeScreenSkillsSectionLi.view";
import ContentCardTitleBannerView from "_views/content-card/ContentCardTitleBanner.view";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";
import {
  getActiveSpecialty,
  specialtyFilter,
  printFilter,
} from "_utils/resume.utils";

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
        {list.map(({ title, list }) => (
          <ContentCardListView
            key={title}
            // className={className}
            wrapperComponent={ContentCardItemLayout}
            title={title}
            list={list}
            filterFunction={(item) =>
              specialtyFilter(item, activeSpecialty.id) && printFilter(item)
            }
            keyFunction={(item) => item.title}
            listItemComponent={({ item }) => (
              <ResumeScreenSkillSectionLiView {...item} />
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumeScreenSkillsView;
