import { type FC } from "react";
import { COLORS } from "_constants";
import ResumeScreenH3View from "./ResumeScreenH3.view";
import { type Certification } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import NonRoutedLink from "_primitives/non-routed-link/NonRoutedLink";
import c from "classnames";

type ResumeScreenCertificationLiViewProps = Certification;

const ResumeScreenCertificationLiView: FC<
  ResumeScreenCertificationLiViewProps
> = ({
  course,
  institution,
  instructor,
  certificateId,
  certificateUrl,
  print,
}) => {
  const Content = () => (
    <ContentCardItemLayout>
      <ResumeScreenH3View>{course}</ResumeScreenH3View>
      <div className="flex justify-between">
        <span className={COLORS.paragraph}>
          {instructor && `${instructor} @ `}
          {institution}
        </span>
        <span className={c(COLORS.secondaryText)}>{certificateId}</span>
      </div>
    </ContentCardItemLayout>
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

export default ResumeScreenCertificationLiView;
