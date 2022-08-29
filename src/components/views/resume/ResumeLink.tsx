import { type FC, type ReactNode } from "react";
import { COLORS, TRANSITIONS, APP_ADDRESS } from "_constants";
import { motion } from "framer-motion";

interface ResumeExternalLinkProps {
  href: string;
  children: ReactNode;
}

const ResumeLink: FC<ResumeExternalLinkProps> = ({ href, children }) => (
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
      className="cursor-pointer relative block"
    >
      {!href.startsWith(APP_ADDRESS) && !href.startsWith("/") && (
        <div
          className={[
            COLORS.secondaryText,
            "absolute top-0 right-0 px-5 py-4 h-10 v-5",
          ].join(" ")}
        >
          <ExternalLinkIcon />
        </div>
      )}
      {children}
    </a>
  </motion.div>
);

const ExternalLinkIcon = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: require("_assets/icons/external-link.svg?include"),
    }}
    className={["w-4 h-4", COLORS.secondaryFill].join(" ")}
  />
);

export default ResumeLink;
