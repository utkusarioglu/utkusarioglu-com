import { type FC } from "react";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import type { Resume, SpecialtyId } from "_types/resume.types";
import { printFilter, specialtyFilter } from "_utils/resume.utils";
import ResumePrintWorkExperienceLiView from "_views/resume-print/ResumePrintWorkExperienceLi.View";

interface ResumePrintWorkExperienceViewProps {
  activeSpecialtyId: SpecialtyId;
  relevantWorkExperience: Resume["relevantWorkExperience"];
}

const ResumePrintWorkExperienceView: FC<ResumePrintWorkExperienceViewProps> = ({
  activeSpecialtyId,
  relevantWorkExperience,
}) => {
  const filteredList = relevantWorkExperience.list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialtyId)
  );

  if (!filteredList.length) {
    return null;
  }

  return (
    <div>
      <ResumePrintH2View>
        {relevantWorkExperience.title.toUpperCase()}
      </ResumePrintH2View>
      <div>
        {filteredList.map((item) => (
          <ResumePrintWorkExperienceLiView key={item.remarks[0]} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ResumePrintWorkExperienceView;
