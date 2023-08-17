import { type FC } from "react";
import { COLORS } from "_config";
import { type ContactListItem } from "_types/resume.types";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import H3 from "_primitives/headings/H3.primitive";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";

type ResumeScreenContactLiViewProps = ContactListItem;

const ResumeScreenContactLiView: FC<ResumeScreenContactLiViewProps> = ({
  title,
  value,
  remarks,
  screen,
  handle,
}) =>
  screen === false ? null : (
    <ContentCardLinkView href={value}>
      <ContentCardItemLayout>
        <H3>{title}</H3>
        <div className="flex justify-between flex-col md:flex-row gap-1">
          <span className={COLORS.paragraph}>{remarks}</span>
          <span className={COLORS.secondaryText}>{handle}</span>
        </div>
      </ContentCardItemLayout>
    </ContentCardLinkView>
  );

export default ResumeScreenContactLiView;
