import { type FC } from "react";
import { type Resume } from "_types/resume.types";
import ResumeIntroduction from "_views/resume/ResumeIntroduction";
import ResumeSection from "_views/resume/ResumeSection";
import ResumeSkills from "_views/resume/ResumeSkills";
import ResumeWorkExperienceLi from "_views/resume/ResumeWorkExperienceLi";
import ResumeCertificationLi from "_views/resume/ResumeCertificationLi";
import ResumeEducationLi from "_views/resume/ResumeEducationLi";
import ResumeCardBackground from "_views/resume/ResumeCardBackground";
import ResumeContactLi from "_views/resume/ResumeContactLi";
import ResumeCardBorder from "_views/resume/ResumeCardBorder";
import {
  COLORS,
  APP_ADDRESS,
  DOMAIN,
  RESUME_PRINT_Y_GAP_CLASS,
} from "_constants";
import ResumeExternalLink from "_views/resume/ResumeExternalLink";
import ResumeH3 from "_views/resume/ResumeH3";

export interface ResumeLayoutProps {
  resume: Resume;
}

const ResumeLayout: FC<ResumeLayoutProps> = ({
  resume: {
    name,
    introduction,
    contact,
    skills,
    relevantWorkExperience,
    relevantCertifications,
    education,
  },
}) => {
  return (
    <>
      <div className="print:hidden">
        <ResumeIntroduction {...introduction} />
        <ResumeCardBackground>
          <ResumeSkills {...skills} />
        </ResumeCardBackground>
        <ResumeCardBackground>
          <ResumeSection
            {...relevantWorkExperience}
            listItemComponent={({ item }) => (
              <ResumeCardBorder>
                <ResumeWorkExperienceLi {...item} />
              </ResumeCardBorder>
            )}
          />
        </ResumeCardBackground>
        <ResumeCardBackground>
          <ResumeSection
            {...relevantCertifications}
            listItemComponent={({ item }) => (
              <ResumeCertificationLi {...item} />
            )}
          />
        </ResumeCardBackground>
        <ResumeCardBackground>
          <ResumeSection
            {...education}
            listItemComponent={({ item }) => (
              <ResumeCardBorder>
                <ResumeEducationLi {...item} />
              </ResumeCardBorder>
            )}
          />
        </ResumeCardBackground>
        <ResumeCardBackground>
          <ResumeSection
            {...contact}
            listItemComponent={({ item }) => <ResumeContactLi {...item} />}
          />
        </ResumeCardBackground>
        <ResumeDownload />
      </div>

      <div className="hidden print:block relative">
        <div
          className={[
            COLORS.print,
            COLORS.printBg,
            "fixed top-0 left-0 right-0 bottom-0",
            "z-50 text-[12px] font-[Arial]",
          ].join(" ")}
        >
          <div
            className={[
              "grid grid-cols-resume grid-rows-resume gap-x-5",
              RESUME_PRINT_Y_GAP_CLASS,
            ].join(" ")}
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
              className={[
                "col-start-1 col-end-3 row-start-2 flex flex-col",
                RESUME_PRINT_Y_GAP_CLASS,
              ].join(" ")}
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
              className={[
                "col-start-3 row-start-2 flex flex-col",
                RESUME_PRINT_Y_GAP_CLASS,
              ].join(" ")}
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
                            .map(
                              ({ name, remarks, confident }, i, filtered) => (
                                <>
                                  <span key={name}>
                                    {name}
                                    {confident === false ? "*" : ""}
                                    {remarks ? ` (${remarks})` : ""}
                                  </span>
                                  <span>
                                    {i < filtered.length - 1 ? ", " : ""}
                                  </span>
                                </>
                              )
                            )}
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
    </>
  );
};

const ResumePrintH1 = ({ children, className = "" }) => (
  <h1 className={["font-bold text-4xl", className].join(" ")}>{children}</h1>
);

const ResumePrintH2 = ({ children, className = "" }) => (
  <h1 className={["font-bold text-md mb-1", className].join(" ")}>
    {children}
  </h1>
);

const ResumePrintH3 = ({ children, className = "" }) => (
  <h1 className={["font-bold text-md", className].join(" ")}>{children}</h1>
);

export default ResumeLayout;

const ResumeDownload = () => (
  <ResumeCardBackground>
    <ResumeSection
      title="Download Resume"
      list={[
        {
          title: "Letter",
          remarks: "North American standard",
          folder: "letter",
        },
        {
          title: "A4",
          remarks: "Standard format for Europe and the rest of the world",
          folder: "a4",
        },
      ]}
      listItemComponent={({ item: { title, folder, remarks } }) => (
        <ResumeExternalLink
          href={`/_next/static/resume/${folder}/utku-sarioglu-resume.pdf`}
        >
          <ResumeCardBorder>
            <ResumeH3 className={COLORS.paragraph}>{title}</ResumeH3>
            <div className={COLORS.paragraph}>{remarks}</div>
          </ResumeCardBorder>
        </ResumeExternalLink>
      )}
    />
  </ResumeCardBackground>
);
