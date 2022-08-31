import { type FC } from "react";
import { COLORS } from "_constants";
import { type ContactListItem } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ResumeScreenH3View from "./ResumeScreenH3.view";
import NonRoutedLink from "_primitives/non-routed-link/NonRoutedLink";

type ResumeScreenContactLiViewProps = ContactListItem;

const ResumeScreenContactLiView: FC<ResumeScreenContactLiViewProps> = ({
  title,
  value,
  remarks,
  screen,
  handle,
}) =>
  screen === false ? null : (
    <NonRoutedLink href={value}>
      <ContentCardItemLayout>
        <ResumeScreenH3View>{title}</ResumeScreenH3View>
        <div className="flex justify-between">
          <span className={COLORS.paragraph}>{remarks}</span>
          <span className={COLORS.secondaryText}>{handle}</span>
        </div>
      </ContentCardItemLayout>
    </NonRoutedLink>
  );

export default ResumeScreenContactLiView;
