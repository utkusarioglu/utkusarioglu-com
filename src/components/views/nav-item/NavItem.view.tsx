import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { type FC, useRef } from "react";
import { COLORS, TRANSITIONS } from "_constants";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import AnimatedLink from "_primitives/animated-link/AnimatedLink.primitive";
import type {
  NavItemProps,
  FontSizes,
  NavModes,
  LinkTypes,
} from "./NavItem.view.types";

const NavItem: FC<NavItemProps> = (props) => {
  const ref = useRef<HTMLDivElement>();
  const { fontSize, mode, href, type, title } = props;
  const { isActiveRoute, isCanvas } = useEnhancedRouter();
  const isActive = isActiveRoute(href);
  const paddingAndMargins = computePaddingAndMargins(fontSize, mode);
  const colorAndFontSize = computeColorAndFontSize(type, fontSize);
  const hasIndicator = type === "page" || isCanvas;

  if (type === "social") {
    return (
      <AnimatedLink href={href} paddingAndMargins={paddingAndMargins}>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={["font-display", colorAndFontSize].join(" ")}
        >
          {title}
        </a>
      </AnimatedLink>
    );
  }

  if (isActive) {
    ref.current?.scrollIntoView({ behavior: "auto", inline: "center" });
  }

  return (
    <div ref={ref} className={["relative", paddingAndMargins].join(" ")}>
      <AnimatePresence initial={false}>
        {isActive && hasIndicator && (
          <motion.div
            className="w-full pointer-events-none block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={TRANSITIONS.route}
          >
            {mode === "bottom" ? (
              <svg
                className="absolute bottom-0 m-auto left-0 right-0"
                width={20}
                height={20}
              >
                <circle
                  cx={10}
                  cy={20}
                  r={10}
                  className={COLORS[`${type}Fill`]}
                />
              </svg>
            ) : (
              <svg
                className="absolute bottom-0 m-auto left-0 top-0"
                width={20}
                height={20}
              >
                <circle cx={0} cy={7} r={7} className={COLORS[`${type}Fill`]} />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatedLink href={href} paddingAndMargins="">
        <Link href={href} passHref>
          <a className={["font-display", colorAndFontSize].join(" ")}>
            {title}
          </a>
        </Link>
      </AnimatedLink>
    </div>
  );
};

function computePaddingAndMargins(fontSize: FontSizes, mode: NavModes) {
  const classes = [];
  if (fontSize === "small") {
    classes.push("mr-5");
  }
  switch (mode) {
    case "bottom":
      classes.push("pb-2");
      break;
    case "aside":
      classes.push("pl-5");
      break;
  }
  return classes.join(" ");
}

function computeColorAndFontSize(type: LinkTypes, fontSize: FontSizes): string {
  const classes = [];

  switch (type) {
    case "home":
      classes.push(COLORS.route);
      break;
    case "page":
      classes.push(COLORS.page);
      break;
    case "social":
      classes.push(COLORS.social);
      break;
    case "extra":
      classes.push(COLORS.extra);
      break;
    default:
      throw new Error("UNRECOGNIZED_NAV_TYPE");
  }

  switch (fontSize) {
    case "small":
      classes.push("text-3xl");
      break;

    case "medium":
      classes.push("text-4xl");
      break;

    case "large":
      classes.push("text-6xl mb-2");
      break;
  }

  return classes.join(" ");
}

export default NavItem;
