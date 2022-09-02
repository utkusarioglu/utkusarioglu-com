import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumeIntroduction from "_views/resume-screen/ResumeScreenIntroduction.view";
import ResumeSection from "_views/content-card/ContentCardSection.view";
import ResumeSkills from "_views/resume-screen/ResumeScreenSkills.view";
import ResumeWorkExperienceLi from "_views/resume-screen/ResumeScreenWorkExperienceLi.view";
import ResumeCertificationLi from "_views/resume-screen/ResumeScreenCertificationLi.view";
import ResumeEducationLi from "_views/resume-screen/ResumeScreenEducationLi.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ResumeContactLi from "_views/resume-screen/ResumeScreenContactLi.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeDownload from "_views/resume-screen/ResumeScreenDownload.view";

export interface ResumeScreenLayoutProps {
  resume: Resume;
}

const ResumeScreenLayout: FC<ResumeScreenLayoutProps> = ({
  resume: {
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
    <ContentCardBackgroundLayout>
      <ResumeSkills {...skills} />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ResumeSection
        {...relevantWorkExperience}
        listItemComponent={({ item }) => (
          <ContentCardItemLayout>
            <ResumeWorkExperienceLi {...item} />
          </ContentCardItemLayout>
        )}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ResumeSection
        {...relevantCertifications}
        listItemComponent={({ item }) => <ResumeCertificationLi {...item} />}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ResumeSection
        {...education}
        listItemComponent={({ item }) => (
          <ContentCardItemLayout>
            <ResumeEducationLi {...item} />
          </ContentCardItemLayout>
        )}
      />
    </ContentCardBackgroundLayout>
    <ContentCardBackgroundLayout>
      <ResumeSection
        {...contact}
        listItemComponent={({ item }) => <ResumeContactLi {...item} />}
      />
    </ContentCardBackgroundLayout>
    <ResumeDownload />
  </div>
);

export default ResumeScreenLayout;
