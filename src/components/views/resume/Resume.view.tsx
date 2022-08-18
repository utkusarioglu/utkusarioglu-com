import { type FC } from "react";
import { COLORS } from "_constants";
import Hyperlink from "_primitives/hyperlink/Hyperlink.primitive";
import { type Resume } from "_types/resume.types";

export interface ResumeViewProps {
  resume: Resume;
}

const ResumeH1 = ({ name }) => (
  <h1 className={[COLORS.paragraph, "text-3xl mb-5"].join(" ")}>{name}</h1>
);

const ResumeH2 = ({ title }) => (
  <h2 className={[COLORS.paragraph, "text-2xl mb-3"].join(" ")}>{title}</h2>
);

const ResumeH3 = ({ title }) => (
  <h2 className={[COLORS.paragraph, "text-xl"].join(" ")}>{title}</h2>
);

const Introduction = ({ title, remarks }) => (
  <div>
    <ResumeH2 title={title} />
    <p className={[COLORS.paragraph].join(" ")}>{remarks}</p>
  </div>
);

const Section = ({ title, list, listItem: ListItem }) => (
  <div className={[COLORS.canvasControlsBg, "p-5 mb-5 rounded-lg"].join(" ")}>
    <ResumeH2 title={title} />
    <ul>
      {list.map((item) => (
        <ListItem item={item} />
      ))}
    </ul>
  </div>
);

const ListItem = ({ children }) => (
  <li className={[COLORS.paragraph].join(" ")}>{children}</li>
);

export const ResumeView: FC<ResumeViewProps> = ({
  resume: {
    name,
    introduction,
    contactChannels,
    skills: {
      naturalLanguages,
      programmingLanguages,
      scriptingLanguages,
      frontend,
      devOpsAndCiCd,
      backend,
      testingAndAnalysis,
      projectHandling,
      web3,
      dataAndMath,
      developmentSoftware,
      notableOtherSoftware,
    },
    relevantWorkExperience,
    relevantCertifications,
    education,
  },
}) => {
  return (
    <>
      <ResumeH1 name={name} />
      <Introduction {...introduction} />
      <Section
        {...contactChannels}
        listItem={({ item: { name, link } }) => (
          <Hyperlink key={link} href={link}>
            {name}
          </Hyperlink>
        )}
      />
      <div>
        <Section
          {...naturalLanguages}
          listItem={({ item: { name, level } }) => (
            <ListItem>
              {name} ({level})
            </ListItem>
          )}
        />
        <>
          {[
            programmingLanguages,
            scriptingLanguages,
            frontend,
            devOpsAndCiCd,
            backend,
            testingAndAnalysis,
            projectHandling,
            web3,
            dataAndMath,
            developmentSoftware,
            notableOtherSoftware,
          ].map((section) => (
            <Section
              {...section}
              listItem={({ item }) => <ListItem>{item}</ListItem>}
            />
          ))}
        </>
      </div>
      <Section
        {...relevantWorkExperience}
        listItem={({
          item: { title, companyName, location, start, finish, remarks },
        }) => (
          <div key={companyName}>
            <ResumeH3 title={title} />
            <h4 className={[COLORS.paragraph, "text-xl"].join(" ")}>
              {companyName} at {location}
            </h4>
            <h5 className={[COLORS.paragraph, "text-lg"].join(" ")}>
              from {start} to {finish}
            </h5>
            <p className={[COLORS.paragraph].join(" ")}>{remarks}</p>
          </div>
        )}
      />
      <Section
        {...relevantCertifications}
        listItem={({
          item: { course, institution, instructor, certificateId },
        }) => (
          <div key={course}>
            <ResumeH3 title={course} />
            <p className={[COLORS.paragraph].join(" ")}>{institution}</p>
            <p className={[COLORS.paragraph].join(" ")}>{instructor}</p>
            <p className={[COLORS.paragraph].join(" ")}>{certificateId}</p>
          </div>
        )}
      />
      <Section
        {...education}
        listItem={({
          item: { title, institution, location, start, finish },
        }) => (
          <div key={title}>
            <ResumeH3 title={title} />
            <div className={[COLORS.paragraph].join(" ")}>
              {institution} at {location}
            </div>
            <div className={[COLORS.paragraph].join(" ")}>
              from {start} to {finish}
            </div>
          </div>
        )}
      />
    </>
  );
};
