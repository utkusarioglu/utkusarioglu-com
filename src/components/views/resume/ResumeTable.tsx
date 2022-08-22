import { type FC } from "react";
import { COLORS } from "_constants";

interface ResumeTableProps {
  table: Record<string, string | number>;
}

const ResumeTable: FC<ResumeTableProps> = ({ table }) => {
  const Pair = ({ heading, value, className = "" }) => (
    <div className={["flex flex-col", className].join(" ")}>
      <span className={[COLORS.paragraph, "font-bold"].join(" ")}>
        {heading}
      </span>
      <span className={[COLORS.paragraph].join(" ")}>{value}</span>
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

export default ResumeTable;
