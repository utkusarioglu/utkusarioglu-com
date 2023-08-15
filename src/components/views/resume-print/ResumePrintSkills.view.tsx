import { type FC } from "react";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import type { Resume, SpecialtyId } from "_types/resume.types";
import { printFilter, specialtyFilter } from "_utils/resume.utils";
import ResumePrintSkillsSectionView from "./ResumePrintSkillsSection.view";

interface ResumePrintSkillsSectionViewProps {
  activeSpecialtyId: SpecialtyId;
  skills: Resume["skills"];
}

const ResumePrintSkillsView: FC<ResumePrintSkillsSectionViewProps> = ({
  activeSpecialtyId,
  skills,
}) => {
  const filteredList = skills.list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialtyId)
  );

  if (!filteredList.length) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between">
        <ResumePrintH2View>{skills.title.toUpperCase()}</ResumePrintH2View>
        <span className="text-right">{skills.remarks}</span>
      </div>
      <div>
        {filteredList.map((skillSection) => (
          <ResumePrintSkillsSectionView
            key={skillSection.title}
            activeSpecialtyId={activeSpecialtyId}
            skillSection={skillSection}
          />
        ))}
      </div>
    </div>
  );
};

export default ResumePrintSkillsView;
