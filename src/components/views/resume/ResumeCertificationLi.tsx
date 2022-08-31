import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeH3 from "./ResumeH3";
import { type Certification } from "_types/resume.types";
import ResumeCardItem from "./ResumeCardItem";
import NonRoutedLink from "./NonRoutedLink";
import c from "classnames";

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
    <ResumeCardItem>
      <ResumeH3>{course}</ResumeH3>
      <div className="flex justify-between">
        <span className={COLORS.paragraph}>
          {instructor && `${instructor} @ `}
          {institution}
        </span>
        <span className={c(COLORS.secondaryText)}>{certificateId}</span>
      </div>
    </ResumeCardItem>
  );

  if (certificateUrl) {
    return (
      <NonRoutedLink href={certificateUrl}>
        <Content />
      </NonRoutedLink>
    );
  }

  return <Content />;
};

export default ResumeCertificationLi;
