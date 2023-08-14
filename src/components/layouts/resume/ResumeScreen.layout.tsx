import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import { specialtyFilter } from "_utils/resume.utils";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import {
  type ResumeSpecialtyIdStateProps,
  type ResumeIncludePhotoStateProps,
} from "_hooks/resume/resume.hooks";

import ResumeSpecialtySelectionView from "_views/resume-screen/ResumeSpecialtySelection.view";
import ResumeCertificationLi from "_views/resume-screen/ResumeScreenCertificationLi.view";
import ResumeContactLi from "_views/resume-screen/ResumeScreenContactLi.view";
import ResumeDownload from "_views/resume-screen/ResumeScreenDownload.view";
import ResumeEducationLi from "_views/resume-screen/ResumeScreenEducationLi.view";
import ResumeIntroduction from "_views/resume-screen/ResumeScreenIntroduction.view";
import ResumeSkills from "_views/resume-screen/ResumeScreenSkills.view";
import ResumeWorkExperienceLi from "_views/resume-screen/ResumeScreenWorkExperienceLi.view";

export type ResumeScreenLayoutProps = ResumeSpecialtyIdStateProps &
  ResumeIncludePhotoStateProps & {
    resume: Resume;
  };

const ResumeScreenLayout: FC<ResumeScreenLayoutProps> = ({
  activeSpecialtyId,
  setActiveSpecialtyId,
  includePhoto,
  setIncludePhoto,
  resume: {
    specialties,
    introduction,
    contact,
    skills,
    relevantWorkExperience,
    relevantCertifications,
    education,
  },
}) => (
  <div className="print:hidden">
    <ResumeIntroduction {...introduction} />
    <ResumeSpecialtySelectionView
      specialties={specialties}
      activeSpecialtyId={activeSpecialtyId}
      setCurrentSpecialty={setActiveSpecialtyId}
    />
    <ResumeDownload
      specialties={specialties}
      activeSpecialtyId={activeSpecialtyId}
      includePhoto={includePhoto}
      setIncludePhoto={setIncludePhoto}
    />
    <ContentCardBackgroundLayout>
      <ResumeSkills
        {...skills}
        specialties={specialties}
        activeSpecialtyId={activeSpecialtyId}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...relevantWorkExperience}
        keyFunction={(item) => item.title + item.start}
        filterFunction={(item) => specialtyFilter(item, activeSpecialtyId)}
        listItemComponent={({ item }) => (
          <ContentCardItemLayout>
            <ResumeWorkExperienceLi {...item} />
          </ContentCardItemLayout>
        )}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...relevantCertifications}
        keyFunction={(item) => item.course}
        filterFunction={(item) => specialtyFilter(item, activeSpecialtyId)}
        listItemComponent={({ item }) => <ResumeCertificationLi {...item} />}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...education}
        keyFunction={({ title }) => title}
        filterFunction={(item) => specialtyFilter(item, activeSpecialtyId)}
        listItemComponent={({ item }) => (
          <ContentCardItemLayout>
            <ResumeEducationLi {...item} />
          </ContentCardItemLayout>
        )}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...contact}
        keyFunction={({ title }) => title}
        filterFunction={(item) => specialtyFilter(item, activeSpecialtyId)}
        listItemComponent={({ item }) => <ResumeContactLi {...item} />}
      />
    </ContentCardBackgroundLayout>
  </div>
);

export default ResumeScreenLayout;
