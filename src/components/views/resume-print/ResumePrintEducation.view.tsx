import { type FC } from "react";
import type { PaperStyles, Resume } from "_types/resume.types";
import ResumePrintH2View from "_views/resume-print/ResumePrintH2.view";
import ResumePrintH3View from "_views/resume-print/ResumePrintH3.view";

interface ResumePrintEducationViewProps {
  activePaperStyles: PaperStyles;
  education: Resume["education"];
}

const ResumePrintEducationView: FC<ResumePrintEducationViewProps> = ({
  activePaperStyles,
  education,
}) => {
  const olGap = activePaperStyles.styles.education.ol.gap;

  return (
    <div>
      <ResumePrintH2View activePaperStyles={activePaperStyles}>
        {education.title.toUpperCase()}
      </ResumePrintH2View>
      <ol className="flex flex-col" style={{ gap: olGap }}>
        {education.list.map(
          ({ title, institution, location, start, finish }) => (
            <div key={title}>
              <div className="flex justify-between">
                <ResumePrintH3View>{title}</ResumePrintH3View>
                <span className="text-right">
                  {start} - {finish}
                </span>
              </div>
              <div className="flex justify-between">
                <span>{institution}</span>
                <span className="text-right">{location}</span>
              </div>
            </div>
          )
        )}
      </ol>
    </div>
  );
};

export default ResumePrintEducationView;
