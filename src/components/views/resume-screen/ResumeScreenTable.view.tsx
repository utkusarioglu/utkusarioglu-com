import { type FC } from "react";
import { COLORS } from "_config";
import c from "classnames";

interface ResumeScreenTableViewProps {
  table: Record<string, string | number>;
}

interface PairProps {
  heading: string;
  value: string | number;
  className?: string;
}

type Pair = FC<PairProps>;

const ResumeScreenTableView: FC<ResumeScreenTableViewProps> = ({ table }) => {
  const Pair: Pair = ({ heading, value, className = "" }) => (
    <div className={c("flex flex-col", className)}>
      <span className={c(COLORS.secondaryText, "font-bold")}>{heading}</span>
      <span className={COLORS.paragraph}>{value}</span>
    </div>
  );

  return (
    <div className="flex flex-row w-full gap-5 my-3 last:mb-0 justify-between">
      {Object.entries(table).map(([title, value]) => (
        <Pair key={title} heading={title} value={value} />
      ))}
    </div>
  );
};

export default ResumeScreenTableView;
