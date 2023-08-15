import { type FC } from "react";
import ResumePrintH3View from "_views/resume-print/ResumePrintH3.view";
import type { WorkExperience } from "_types/resume.types";

interface ResumePrintWorkExperienceLiViewProps {
  item: WorkExperience;
}

const ResumePrintWorkExperienceLiView: FC<
  ResumePrintWorkExperienceLiViewProps
> = ({ item: { remarks, title, companyName, location, start, finish } }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 mb-2 last:mb-0">
      <ResumePrintH3View className="row-start-1 col-start-1">
        {title}
      </ResumePrintH3View>
      <span className="row-start-1 col-start-2 text-right">
        {start} - {finish}
      </span>
      <span className="row-start-2 col-start-1">{companyName}</span>
      <span className="row-start-2 col-start-2 text-right">{location}</span>
      <div className="row-start-3 col-start-1 col-end-3">
        {remarks.map((paragraph) => (
          <p key={paragraph} className="mb-1 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResumePrintWorkExperienceLiView;
