import { type FC } from "react";
import type { Resume } from "_types/resume.types";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import ResumePrintH3View from "_views/resume-print/ResumePrintH3.view";

interface ResumePrintEducationViewProps {
  education: Resume["education"];
}

const ResumePrintEducationView: FC<ResumePrintEducationViewProps> = ({
  education,
}) => {
  return (
    <div>
      <ResumePrintH2View>{education.title.toUpperCase()}</ResumePrintH2View>
      <div>
        {education.list.map(
          ({ title, institution, location, start, finish }) => (
            <div key={title} className="grid grid-rows-2 grid-cols-2">
              <ResumePrintH3View className="row-start-1 col-start-1">
                {title}
              </ResumePrintH3View>
              <span className="row-start-1 col-start-2 text-right">
                {start} - {finish}
              </span>
              <span className="row-start-2 col-start-1">{institution}</span>
              <span className="row-start-2 col-start-2 text-right">
                {location}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ResumePrintEducationView;
