import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeH3 from "./ResumeH3";
import { type Certification } from "_types/resume.types";
import ResumeCardBorder from "./ResumeCardBorder";
import ResumeExternalLink from "./ResumeExternalLink";

type ResumeCertificationLiProps = Certification;

const ResumeCertificationLi: FC<ResumeCertificationLiProps> = ({
  course,
  institution,
  instructor,
  certificateId,
  certificateUrl,
  print,
}) => {
  const Content = () => (
    <ResumeCardBorder>
      <ResumeH3>{course}</ResumeH3>
      <div className="flex justify-between">
        <span className={COLORS.paragraph}>
          {instructor && `${instructor} @ `}
          {institution}
        </span>
        <span className={[COLORS.secondaryText].join(" ")}>
          {certificateId}
        </span>
      </div>
    </ResumeCardBorder>
  );

  if (certificateUrl) {
    return (
      <ResumeExternalLink href={certificateUrl}>
        <Content />
      </ResumeExternalLink>
    );
  }

  return <Content />;
};

export default ResumeCertificationLi;
