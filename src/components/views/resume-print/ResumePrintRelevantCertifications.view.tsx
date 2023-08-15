import { type FC } from "react";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import type { Resume, SpecialtyId } from "_types/resume.types";
import { APP_ADDRESS, DOMAIN } from "_config";
import { printFilter, specialtyFilter } from "_utils/resume.utils";

interface ResumePrintRelevantCertificationsViewProps {
  activeSpecialtyId: SpecialtyId;
  relevantCertifications: Resume["relevantCertifications"];
}

const ResumePrintRelevantCertificationsView: FC<
  ResumePrintRelevantCertificationsViewProps
> = ({ activeSpecialtyId, relevantCertifications }) => {
  const filteredList = relevantCertifications.list.filter(
    (item) => printFilter(item) && specialtyFilter(item, activeSpecialtyId)
  );

  if (!filteredList.length) {
    return null;
  }

  return (
    <div>
      <div className="flex justify-between">
        <ResumePrintH2View>
          {relevantCertifications.title.toUpperCase()}
        </ResumePrintH2View>
        <span className="text-right">
          please visit <a href={`${APP_ADDRESS}/resume`}>{DOMAIN}/resume</a> for
          details
        </span>
      </div>
      <div>
        {filteredList.map(({ course, institution }) => (
          <div key={course} className="flex justify-between w-full">
            <span>{course}</span>
            <span>{institution}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResumePrintRelevantCertificationsView;
