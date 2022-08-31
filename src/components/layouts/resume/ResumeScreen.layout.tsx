import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumeIntroduction from "_views/resume-screen/ResumeIntroduction";
import ResumeSection from "_views/resume-screen/ResumeSection";
import ResumeSkills from "_views/resume-screen/ResumeSkills";
import ResumeWorkExperienceLi from "_views/resume-screen/ResumeWorkExperienceLi";
import ResumeCertificationLi from "_views/resume-screen/ResumeCertificationLi";
import ResumeEducationLi from "_views/resume-screen/ResumeEducationLi";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ResumeContactLi from "_views/resume-screen/ResumeContactLi";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeDownload from "_views/resume-screen/ResumeDownload";

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
