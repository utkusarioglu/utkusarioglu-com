import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeH3 from "./ResumeH3";
import { type Certification } from "_types/resume.types";
import ContentCardItem from "_views/content-card/ContentCardItem";
import NonRoutedLink from "_primitives/non-routed-link/NonRoutedLink";
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
    <ContentCardItem>
      <ResumeH3>{course}</ResumeH3>
      <div className="flex justify-between">
        <span className={COLORS.paragraph}>
          {instructor && `${instructor} @ `}
          {institution}
        </span>
        <span className={c(COLORS.secondaryText)}>{certificateId}</span>
      </div>
    </ContentCardItem>
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
