import { type FC } from "react";
import type { SkillSection, SpecialtyId } from "_types/resume.types";
import ResumePrintH3View from "_views/resume-print/ResumePrintH3.view";
import { printFilter, specialtyFilter } from "_utils/resume.utils";

interface ResumePrintSkillsSectionViewProps {
  activeSpecialtyId: SpecialtyId;
  skillSection: SkillSection;
}

const ResumePrintSkillsSectionView: FC<ResumePrintSkillsSectionViewProps> = ({
  activeSpecialtyId,
  skillSection: { title, list },
}) => {
  const filteredList = list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialtyId)
  );

  if (!filteredList.length) {
    return null;
  }

  return (
    <div>
      <ResumePrintH3View>{title}</ResumePrintH3View>
      <div>
        {filteredList.map(({ title, remarks, confident }, i, filtered) => (
          <>
            <span key={title}>
              {title}
              {confident === false ? "*" : ""}
              {remarks ? ` (${remarks})` : ""}
            </span>
            <span>{i < filtered.length - 1 ? ", " : ""}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default ResumePrintSkillsSectionView;
