import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import {
  COLORS,
  APP_ADDRESS,
  DOMAIN,
  RESUME_PRINT_Y_GAP_CLASS,
} from "_constants";
import ResumePrintH1 from "_views/resume-print/ResumePrintH1";
import ResumePrintH2 from "_views/resume-print/ResumePrintH2";
import ResumePrintH3 from "_views/resume-print/ResumePrintH3";
import c from "classnames";

export interface ResumeLayoutProps {
  resume: Resume;
}

const ResumePrintLayout: FC<ResumeLayoutProps> = ({
  resume: {
    name,
    contact,
    skills,
    relevantWorkExperience,
    relevantCertifications,
    education,
  },
}) => (
  <div className="hidden print:block relative">
    <div
      className={c(
        COLORS.print,
        COLORS.printBg,
        "fixed top-0 left-0 right-0 bottom-0",
        "z-50 text-[12px] font-[Arial]"
      )}
    >
      <div
        className={c(
          RESUME_PRINT_Y_GAP_CLASS,
          "grid grid-cols-resume grid-rows-resume gap-x-5"
        )}
      >
        <ResumePrintH1 className="col-start-1 row-start-1">
          {name}
        </ResumePrintH1>
        <div className="col-start-2 row-start-1 text-right">
          {contact.list
            .filter(({ print }) => print !== false)
            .map(({ title }) => (
              <div key={title}>
                <span>{title}</span>:
              </div>
            ))}
        </div>
        <div className="col-start-3 row-start-1">
          {contact.list
            .filter(({ print }) => print !== false)
            .map(({ value }) => (
              <div key={value}>
                <span>{value}</span>
              </div>
            ))}
        </div>

        <div
          className={c(
            RESUME_PRINT_Y_GAP_CLASS,
            "col-start-1 col-end-3 row-start-2 flex flex-col"
          )}
        >
          <div>
            <ResumePrintH2>
              {relevantWorkExperience.title.toUpperCase()}
            </ResumePrintH2>
            <div>
              {relevantWorkExperience.list
                .filter(({ print }) => print !== false)
                .map(
                  ({
                    remarks,
                    title,
                    companyName,
                    location,
                    start,
                    finish,
                  }) => (
                    <div
                      key={remarks[0]}
                      className="grid grid-cols-2 grid-rows-3 mb-2 last:mb-0"
                    >
                      <ResumePrintH3 className="row-start-1 col-start-1">
                        {title}
                      </ResumePrintH3>
                      <span className="row-start-1 col-start-2 text-right">
                        {start} - {finish}
                      </span>
                      <span className="row-start-2 col-start-1">
                        {companyName}
                      </span>
                      <span className="row-start-2 col-start-2 text-right">
                        {location}
                      </span>
                      <div className="row-start-3 col-start-1 col-end-3">
                        {remarks.map((paragraph) => (
                          <p key={paragraph} className="mb-1 last:mb-0">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )
                )}
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <ResumePrintH2>
                {relevantCertifications.title.toUpperCase()}
              </ResumePrintH2>
              <span className="text-right">
                please visit{" "}
                <a href={`${APP_ADDRESS}/resume`}>{DOMAIN}/resume</a> for
                details
              </span>
            </div>
            <div>
              {relevantCertifications.list
                .filter(({ print }) => print !== false)
                .map(({ course, institution }) => (
                  <div key={course} className="flex justify-between w-full">
                    <span>{course}</span>
                    <span>{institution}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div
          className={c(
            "col-start-3 row-start-2 flex flex-col",
            RESUME_PRINT_Y_GAP_CLASS
          )}
        >
          <div>
            <div className="flex justify-between">
              <ResumePrintH2>{skills.title.toUpperCase()}</ResumePrintH2>
              <span className="text-right">{skills.remarks}</span>
            </div>
            <div>
              {Object.values(skills.map)
                .filter(({ print }) => print !== false)
                .map(({ title, list }) => (
                  <div key={title}>
                    <ResumePrintH3>{title}</ResumePrintH3>
                    <div>
                      {list
                        .filter(({ print }) => print !== false)
                        .map(({ name, remarks, confident }, i, filtered) => (
                          <>
                            <span key={name}>
                              {name}
                              {confident === false ? "*" : ""}
                              {remarks ? ` (${remarks})` : ""}
                            </span>
                            <span>{i < filtered.length - 1 ? ", " : ""}</span>
                          </>
                        ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <ResumePrintH2>{education.title.toUpperCase()}</ResumePrintH2>
            <div>
              {education.list.map(
                ({ title, institution, location, start, finish }) => (
                  <div key={title} className="grid grid-rows-2 grid-cols-2">
                    <ResumePrintH3 className="row-start-1 col-start-1">
                      {title}
                    </ResumePrintH3>
                    <span className="row-start-1 col-start-2 text-right">
                      {start} - {finish}
                    </span>
                    <span className="row-start-2 col-start-1">
                      {institution}
                    </span>
                    <span className="row-start-2 col-start-2 text-right">
                      {location}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ResumePrintLayout;
