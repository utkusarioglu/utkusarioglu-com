import { type FC, type Dispatch, type SetStateAction } from "react";
import { type SpecialtyId, type Resume } from "_types/resume.types";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";

import ResumeSpecialtiesView from "_views/resume-screen/ResumeSpecialties.view";
import ResumeCertificationLi from "_views/resume-screen/ResumeScreenCertificationLi.view";
import ResumeContactLi from "_views/resume-screen/ResumeScreenContactLi.view";
import ResumeDownload from "_views/resume-screen/ResumeScreenDownload.view";
import ResumeEducationLi from "_views/resume-screen/ResumeScreenEducationLi.view";
import ResumeIntroduction from "_views/resume-screen/ResumeScreenIntroduction.view";
import ResumeSkills from "_views/resume-screen/ResumeScreenSkills.view";
import ResumeWorkExperienceLi from "_views/resume-screen/ResumeScreenWorkExperienceLi.view";

export interface ResumeScreenLayoutProps {
  activeSpecialtyId: SpecialtyId;
  setActiveSpecialtyId: Dispatch<SetStateAction<SpecialtyId>>;
  resume: Resume;
}

const ResumeScreenLayout: FC<ResumeScreenLayoutProps> = ({
  activeSpecialtyId: currentSpecialtyId,
  setActiveSpecialtyId: setCurrentSpecialtyId,
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
    <ResumeSpecialtiesView
      specialties={specialties}
      currentSpecialty={currentSpecialtyId}
      setCurrentSpecialty={setCurrentSpecialtyId}
    />
    <ResumeDownload />
    <ContentCardBackgroundLayout>
      <ResumeSkills {...skills} />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...relevantWorkExperience}
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
        listItemComponent={({ item }) => <ResumeCertificationLi {...item} />}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        {...education}
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
        listItemComponent={({ item }) => <ResumeContactLi {...item} />}
      />
    </ContentCardBackgroundLayout>
  </div>
);

export default ResumeScreenLayout;
