import { type FC } from "react";
import { COLORS } from "_constants";
import { type ContactListItem } from "_types/resume.types";
import ResumeCardItem from "./ResumeCardItem";
import ResumeH3 from "./ResumeH3";
import ResumeLink from "./ResumeLink";

type ResumeContactLiProps = ContactListItem;

const ResumeContactLi: FC<ResumeContactLiProps> = ({
  title,
  value,
  remarks,
  screen,
  handle,
}) =>
  screen === false ? null : (
    <ResumeLink href={value}>
      <ResumeCardItem>
        <ResumeH3>{title}</ResumeH3>
        <div className="flex justify-between">
          <span className={COLORS.paragraph}>{remarks}</span>
          <span className={COLORS.secondaryText}>{handle}</span>
        </div>
      </ResumeCardItem>
    </ResumeLink>
  );

export default ResumeContactLi;
