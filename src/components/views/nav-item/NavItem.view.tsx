import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { type FC, useRef, useEffect } from "react";
import { useEnhancedRouter } from "_hooks/router/router.hook";
import AnimatedLink from "_primitives/animated-link/AnimatedLink.primitive";
import type { NavItemProps } from "./NavItem.view.types";
import c from "classnames";
import NavItemRouteIndicatorView from "./NavItemRouteIndicator.view";
import {
  computePaddingAndMargins,
  computeColorAndFontSize,
} from "./NavItem.logic";
import { useDeviceQuery } from "_hooks/device/device.hook";

const NavItem: FC<NavItemProps> = (props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isSm } = useDeviceQuery();
  const { fontSize, mode, href, type, title, zIndex } = props;
  const { isActiveRoute, isCanvas } = useEnhancedRouter();
  const isActive = isActiveRoute(href);
  const paddingAndMargins = computePaddingAndMargins(fontSize, mode);
  const colorAndFontSize = computeColorAndFontSize(type, fontSize, isSm);
  const hasIndicator = type === "page" || isCanvas;

  useEffect(() => {
    if (isActive) {
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }, [isActive, containerRef]);

  if (type === "social") {
    return (
      <div style={{ zIndex }}>
        <AnimatedLink href={href} paddingAndMargins={paddingAndMargins}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={c(colorAndFontSize, "font-display")}
          >
            {title}
          </a>
        </AnimatedLink>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={c("relative", paddingAndMargins)}
      style={{ zIndex }}
    >
      <AnimatePresence initial={false}>
        {isActive && hasIndicator && (
          <NavItemRouteIndicatorView mode={mode} type={type} />
        )}
      </AnimatePresence>
      <AnimatedLink href={href} paddingAndMargins="">
        <Link href={href} passHref>
          <a className={c("font-display", colorAndFontSize)}>{title}</a>
        </Link>
      </AnimatedLink>
    </div>
  );
};

export default NavItem;
