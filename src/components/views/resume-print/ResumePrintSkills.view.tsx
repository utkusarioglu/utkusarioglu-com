import { type FC } from "react";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import type { Resume, Specialty, SpecialtyId } from "_types/resume.types";
import { printFilter, specialtyFilter } from "_utils/resume.utils";
import ResumePrintSkillsSectionView from "./ResumePrintSkillsSection.view";

interface ResumePrintSkillsSectionViewProps {
  activeSpecialty: Specialty;
  skills: Resume["skills"];
}

const ResumePrintSkillsView: FC<ResumePrintSkillsSectionViewProps> = ({
  activeSpecialty,
  skills,
}) => {
  const filteredList = skills.list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialty.id)
  );

  if (!filteredList.length) {
    return null;
  }

  const olGap = activeSpecialty.styles.skills.ol.gap;

  return (
    <div>
      <div className="flex justify-between">
        <ResumePrintH2View>{skills.title.toUpperCase()}</ResumePrintH2View>
        <span className="text-right">{skills.remarks}</span>
      </div>
      <ol className="flex flex-col" style={{ gap: olGap }}>
        {filteredList.map((skillSection) => (
          <ResumePrintSkillsSectionView
            key={skillSection.title}
            activeSpecialty={activeSpecialty}
            // activeSpecialtyId={activeSpecialtyId}
            skillSection={skillSection}
          />
        ))}
      </ol>
    </div>
  );
};

export default ResumePrintSkillsView;
