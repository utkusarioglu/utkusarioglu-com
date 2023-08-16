import { type FC } from "react";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import type { Resume, Specialty, SpecialtyId } from "_types/resume.types";
import { printFilter, specialtyFilter } from "_utils/resume.utils";
import ResumePrintWorkExperienceLiView from "_views/resume-print/ResumePrintWorkExperienceLi.View";

interface ResumePrintWorkExperienceViewProps {
  // activeSpecialtyId: SpecialtyId;
  activeSpecialty: Specialty;
  relevantWorkExperience: Resume["relevantWorkExperience"];
}

const ResumePrintWorkExperienceView: FC<ResumePrintWorkExperienceViewProps> = ({
  activeSpecialty,
  relevantWorkExperience,
}) => {
  const filteredList = relevantWorkExperience.list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialty.id)
  );

  if (!filteredList.length) {
    return null;
  }

  const olGap = activeSpecialty.styles.relevantWorkExperience.ol.gap;

  return (
    <div>
      <ResumePrintH2View>
        {relevantWorkExperience.title.toUpperCase()}
      </ResumePrintH2View>
      <ol className="flex flex-col" style={{ gap: olGap }}>
        {filteredList.map((item) => (
          <ResumePrintWorkExperienceLiView
            key={item.remarks[0]}
            activeSpecialty={activeSpecialty}
            item={item}
          />
        ))}
      </ol>
    </div>
  );
};

export default ResumePrintWorkExperienceView;
