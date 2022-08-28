import { type FC } from "react";
import { COLORS } from "_constants";
import { type ContactListItem } from "_types/resume.types";
import ResumeCardItem from "./ResumeCardItem";
import ResumeH3 from "./ResumeH3";
import ResumeExternalLink from "./ResumeExternalLink";

type ResumeContactLiProps = ContactListItem;

const ResumeContactLi: FC<ResumeContactLiProps> = ({
  title,
  value,
  remarks,
  print,
  screen,
  handle,
}) =>
  screen === false ? null : (
    <ResumeExternalLink href={value}>
      <ResumeCardItem>
        <ResumeH3>{title}</ResumeH3>
        <div className="flex justify-between">
          <span className={COLORS.paragraph}>{remarks}</span>
          <span className={[COLORS.secondaryText].join(" ")}>{handle}</span>
        </div>
      </ResumeCardItem>
    </ResumeExternalLink>
  );

export default ResumeContactLi;
