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
        {filteredList.map(({ title, value }) => {
          let internalComponent = <span>{value}</span>;

          switch (title) {
            case "Phone":
              internalComponent = <a href={`tel:${value}`}>{value}</a>;
              break;

            case "Email":
              internalComponent = <a href={`mailto:${value}`}>{value}</a>;
              break;

            case "Website":
              internalComponent = (
                <a
                  href={`https://${value}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {value}
                </a>
              );
              break;
          }

          return <div key={value}>{internalComponent}</div>;
        })}
      </div>
    </>
  );
};

export default ResumePrintContactView;
