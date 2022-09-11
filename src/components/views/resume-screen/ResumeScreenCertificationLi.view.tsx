import { type FC } from "react";
import { COLORS } from "_config";
import H3 from "_primitives/headings/H3.primitive";
import { type Certification } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
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
      <H3>{course}</H3>
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
      <ContentCardLinkView href={certificateUrl}>
        <Content />
      </ContentCardLinkView>
    );
  }

  return <Content />;
};

export default ResumeScreenCertificationLiView;
