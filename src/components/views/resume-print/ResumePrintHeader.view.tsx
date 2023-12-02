import { type FC } from "react";
import { type IncludePhoto } from "_hooks/resume/resume.hooks";
import { type Resume } from "_types/resume.types";
import ResumePrintH1View from "_views/resume-print/ResumePrintH1.view";

interface ResumePrintHeaderViewProps {
  includePhoto: IncludePhoto;
  name: Resume["name"];
}

const ResumePrintHeaderView: FC<ResumePrintHeaderViewProps> = ({
  includePhoto,
  name,
}) => (
  <div className="col-start-1 row-start-1 flex flex-row gap-5">
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

export default ResumePrintHeaderView;
