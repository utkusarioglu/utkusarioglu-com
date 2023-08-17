import { type FC } from "react";
import { type IncludePhoto } from "_hooks/resume/resume.hooks";
import { type Specialty, type Resume } from "_types/resume.types";
import ResumePrintH1View from "_views/resume-print/ResumePrintH1.view";

interface ResumePrintHeaderViewProps {
  activeSpecialty: Specialty;
  includePhoto: IncludePhoto;
  name: Resume["name"];
}

const ResumePrintHeaderView: FC<ResumePrintHeaderViewProps> = ({
  activeSpecialty,
  includePhoto,
  name,
}) => {
  const headerDividerHeight = activeSpecialty.styles.header.clearance.height;
  return (
    <div
      className="col-start-1 row-start-1 flex flex-row gap-5"
      style={{ marginBottom: headerDividerHeight }}
    >
      {includePhoto ? (
        <img
          style={{ objectFit: "scale-down", height: "70px" }}
          src={require("_assets/images/utku-resume-1x1.jpg")}
          className="rounded-full"
        />
      ) : null}
      <div>
        {includePhoto ? (
          name
            .split(" ")
            .map((word) => (
              <ResumePrintH1View key={word}>{word}</ResumePrintH1View>
            ))
        ) : (
          <ResumePrintH1View>{name}</ResumePrintH1View>
        )}
      </div>
    </div>
  );
};

export default ResumePrintHeaderView;
