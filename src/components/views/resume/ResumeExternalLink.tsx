import { type FC, type ReactNode } from "react";
import { COLORS, TRANSITIONS } from "_constants";
import { motion } from "framer-motion";

interface ResumeExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ResumeExternalLink: FC<ResumeExternalLinkProps> = ({
  href,
  children,
}) => (
  <motion.div
    className="mb-3 last:mb-0 rounded-lg"
    layout
    whileHover={{ backgroundColor: COLORS.theme }}
    transition={TRANSITIONS.routeFast}
  >
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer relative"
    >
      <div
        className={[
          COLORS.secondaryText,
          "absolute top-0 right-0 px-5 py-3",
        ].join(" ")}
      >
        ↗ ⇗ ◹
      </div>
      {children}
    </a>
  </motion.div>
);

export default ResumeExternalLink;
