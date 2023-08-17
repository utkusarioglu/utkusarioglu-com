import { type FC } from "react";
import type { SkillSection, Specialty, SpecialtyId } from "_types/resume.types";
import ResumePrintH3View from "_views/resume-print/ResumePrintH3.view";
import { printFilter, specialtyFilter } from "_utils/resume.utils";

interface ResumePrintSkillsSectionViewProps {
  // activeSpecialtyId: SpecialtyId;
  activeSpecialty: Specialty;
  skillSection: SkillSection;
}

const ResumePrintSkillsSectionView: FC<ResumePrintSkillsSectionViewProps> = ({
  activeSpecialty,
  skillSection: { title, list },
}) => {
  const filteredList = list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialty.id)
  );

  if (!filteredList.length) {
    return null;
  }

  const headerDividerHeight = activeSpecialty.styles.skills.li.divider.height;

  return (
    <div>
      <ResumePrintH3View>{title}</ResumePrintH3View>
      <div style={{ height: headerDividerHeight, background: "red" }} />
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
