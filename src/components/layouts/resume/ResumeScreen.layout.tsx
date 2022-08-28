import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumeIntroduction from "_views/resume/ResumeIntroduction";
import ResumeSection from "_views/resume/ResumeSection";
import ResumeSkills from "_views/resume/ResumeSkills";
import ResumeWorkExperienceLi from "_views/resume/ResumeWorkExperienceLi";
import ResumeCertificationLi from "_views/resume/ResumeCertificationLi";
import ResumeEducationLi from "_views/resume/ResumeEducationLi";
import ResumeCardBackground from "_views/resume/ResumeCardBackground";
import ResumeContactLi from "_views/resume/ResumeContactLi";
import ResumeCardBorder from "_views/resume/ResumeCardBorder";
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
    <ResumeCardBackground>
      <ResumeSkills {...skills} />
    </ResumeCardBackground>
    <ResumeCardBackground>
      <ResumeSection
        {...relevantWorkExperience}
        listItemComponent={({ item }) => (
          <ResumeCardBorder>
            <ResumeWorkExperienceLi {...item} />
          </ResumeCardBorder>
        )}
      />
    </ResumeCardBackground>
    <ResumeCardBackground>
      <ResumeSection
        {...relevantCertifications}
        listItemComponent={({ item }) => <ResumeCertificationLi {...item} />}
      />
    </ResumeCardBackground>
    <ResumeCardBackground>
      <ResumeSection
        {...education}
        listItemComponent={({ item }) => (
          <ResumeCardBorder>
            <ResumeEducationLi {...item} />
          </ResumeCardBorder>
        )}
      />
    </ResumeCardBackground>
    <ResumeCardBackground>
      <ResumeSection
        {...contact}
        listItemComponent={({ item }) => <ResumeContactLi {...item} />}
      />
    </ResumeCardBackground>
    <ResumeDownload />
  </div>
);

export default ResumeScreenLayout;
