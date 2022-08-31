import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumeIntroduction from "_views/resume/ResumeIntroduction";
import ResumeSection from "_views/resume/ResumeSection";
import ResumeSkills from "_views/resume/ResumeSkills";
import ResumeWorkExperienceLi from "_views/resume/ResumeWorkExperienceLi";
import ResumeCertificationLi from "_views/resume/ResumeCertificationLi";
import ResumeEducationLi from "_views/resume/ResumeEducationLi";
import ContentCardBackground from "_views/content-card/ContentCardBackground";
import ResumeContactLi from "_views/resume/ResumeContactLi";
import ContentCardItem from "_views/content-card/ContentCardItem";
import ResumeDownload from "_views/resume/ResumeDownload";

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
    <ContentCardBackground>
      <ResumeSkills {...skills} />
    </ContentCardBackground>
    <ContentCardBackground>
      <ResumeSection
        {...relevantWorkExperience}
        listItemComponent={({ item }) => (
          <ContentCardItem>
            <ResumeWorkExperienceLi {...item} />
          </ContentCardItem>
        )}
      />
    </ContentCardBackground>
    <ContentCardBackground>
      <ResumeSection
        {...relevantCertifications}
        listItemComponent={({ item }) => <ResumeCertificationLi {...item} />}
      />
    </ContentCardBackground>
    <ContentCardBackground>
      <ResumeSection
        {...education}
        listItemComponent={({ item }) => (
          <ContentCardItem>
            <ResumeEducationLi {...item} />
          </ContentCardItem>
        )}
      />
    </ContentCardBackground>
    <ContentCardBackground>
      <ResumeSection
        {...contact}
        listItemComponent={({ item }) => <ResumeContactLi {...item} />}
      />
    </ContentCardBackground>
    <ResumeDownload />
  </div>
);

export default ResumeScreenLayout;
