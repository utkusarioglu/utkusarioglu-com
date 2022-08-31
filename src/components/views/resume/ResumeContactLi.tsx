import { type FC } from "react";
import { COLORS } from "_constants";
import { type ContactListItem } from "_types/resume.types";
import ContentCardItem from "_views/content-card/ContentCardItem";
import ResumeH3 from "./ResumeH3";
import NonRoutedLink from "_primitives/non-routed-link/NonRoutedLink";

type ResumeContactLiProps = ContactListItem;

const ResumeContactLi: FC<ResumeContactLiProps> = ({
  title,
  value,
  remarks,
  screen,
  handle,
}) =>
  screen === false ? null : (
    <NonRoutedLink href={value}>
      <ContentCardItem>
        <ResumeH3>{title}</ResumeH3>
        <div className="flex justify-between">
          <span className={COLORS.paragraph}>{remarks}</span>
          <span className={COLORS.secondaryText}>{handle}</span>
        </div>
      </ContentCardItem>
    </NonRoutedLink>
  );

export default ResumeContactLi;
