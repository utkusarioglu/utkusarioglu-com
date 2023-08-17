import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import { printFilter, specialtyFilter } from "_utils/resume.utils";

interface ResumePrintContactViewProps {
  contact: Resume["contact"];
}

const ResumePrintContactView: FC<ResumePrintContactViewProps> = ({
  contact,
}) => {
  const filteredList = contact.list.filter((item) => printFilter(item));
  return (
    <>
      <div className="col-start-2 row-start-1 text-right">
        {filteredList.map(({ title }) => (
          <div key={title}>
            <span>{title}</span>:
          </div>
        ))}
      </div>
      <div className="col-start-3 row-start-1">
        {filteredList.map(({ value }) => (
          <div key={value}>
            <span>{value}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumePrintContactView;
