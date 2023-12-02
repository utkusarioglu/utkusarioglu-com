import { type FC } from "react";
import { type SpecialtyId, type Resume } from "_types/resume.types";
import { COLORS } from "_config";
import c from "classnames";
import type {
  ResumePaperFormatShortCodeProps,
  IncludePhoto,
} from "_hooks/resume/resume.hooks";
import ResumePrintWorkExperience from "_views/resume-print/ResumePrintWorkExperience.view";
import ResumePrintRelevantCertificationsView from "_views/resume-print/ResumePrintRelevantCertifications.view";
import ResumePrintSkillsView from "_views/resume-print/ResumePrintSkills.view";
import ResumePrintEducationView from "_views/resume-print/ResumePrintEducation.view";
import ResumePrintResumeCodeView from "_views/resume-print/ResumePrintResumeCode.view";
import ResumePrintHeaderView from "_views/resume-print/ResumePrintHeader.view";
import ResumePrintContactView from "_views/resume-print/ResumePrintContact.view";
import { getActivePaperStyles, getActiveSpecialty } from "_utils/resume.utils";

export type ResumeLayoutProps = ResumePaperFormatShortCodeProps & {
  activeSpecialtyId: SpecialtyId;
  resume: Resume;
  includePhoto: IncludePhoto;
  resumeCode: string[];
};

const ResumePrintLayout: FC<ResumeLayoutProps> = ({
  activeSpecialtyId,
  includePhoto,
  resumeCode,
  resume: {
    variants: { specialties, paperStyles },
    name,
    contact,
    skills,
    relevantWorkExperience,
    relevantCertifications,
    education,
  },
  activePaperFormatShortCode,
}) => {
  const activeSpecialty = getActiveSpecialty(specialties, activeSpecialtyId);
  const activePaperStyles = getActivePaperStyles(
    paperStyles,
    activeSpecialtyId,
    activePaperFormatShortCode
  );
  const layoutTemplateColumns = activePaperStyles.styles.layout.templateColumns;
  const layoutGridColumnGap = activePaperStyles.styles.layout.columnGap;
  const sectionsRowGap = activePaperStyles.styles.layout.sectionsGap;
  const headerGap = activePaperStyles.styles.layout.headerGap;

  return (
    <div className="hidden print:block relative">
      <ResumePrintResumeCodeView resumeCode={resumeCode} />
      <div
        className={c(
          COLORS.print,
          COLORS.printBg,
          "fixed top-0 left-0 right-0 bottom-0",
          "z-40 text-[12px] font-[Arial]",
          "flex justify-between"
        )}
      >
        <div
          className={"grid grid-rows-resume content-between"}
          style={{
            gridTemplateColumns: layoutTemplateColumns,
            columnGap: layoutGridColumnGap,
            rowGap: headerGap,
          }}
        >
          <ResumePrintHeaderView includePhoto={includePhoto} name={name} />
          <ResumePrintContactView contact={contact} />

          <div
            className={c(
              "col-start-1 col-end-3 row-start-2 flex flex-col",
              "flex justify-between"
            )}
            style={{
              rowGap: sectionsRowGap,
            }}
          >
            <ResumePrintWorkExperience
              activeSpecialty={activeSpecialty}
              activePaperStyles={activePaperStyles}
              relevantWorkExperience={relevantWorkExperience}
            />
            <ResumePrintRelevantCertificationsView
              activeSpecialty={activeSpecialty}
              activePaperStyles={activePaperStyles}
              relevantCertifications={relevantCertifications}
            />
          </div>

          <div
            className={c(
              "col-start-3 row-start-2 flex flex-col",
              "flex justify-between"
            )}
            style={{
              rowGap: sectionsRowGap,
            }}
          >
            <ResumePrintSkillsView
              activeSpecialty={activeSpecialty}
              activePaperStyles={activePaperStyles}
              skills={skills}
            />
            <ResumePrintEducationView
              activePaperStyles={activePaperStyles}
              education={education}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumePrintLayout;
