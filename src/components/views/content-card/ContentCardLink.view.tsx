import { type FC, type PropsWithChildren } from "react";
import { COLORS, TRANSITIONS, APP_ADDRESS } from "_config";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import c from "classnames";
import Link from "next/link";

type ContentCardLinkViewProps = PropsWithChildren<{
  href: string;
}>;

const ContentCardLinkView: FC<ContentCardLinkViewProps> = ({
  href,
  children,
}) => {
  // const isExternalLink = !href.startsWith(APP_ADDRESS) && !href.startsWith("/");
  const isExternalLink = href.startsWith("/");
  return (
    <MDiv
      className="mb-3 last:mb-0 rounded-lg box"
      layout
      style={{
        boxShadow: "0px 0px 0px 0px transparent inset",
      }}
      whileHover={{
        boxShadow: `0px 0px 8px 8px #7FA4AC inset`,
      }}
      transition={TRANSITIONS.routeFast}
    >
      {isExternalLink ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer relative block"
        >
          <div className="absolute top-0 right-0 px-5 py-4 h-10 v-5">
            <ExternalLinkIcon />
          </div>
          {children}
        </a>
      ) : (
        <Link href={href} passHref>
          <a>{children}</a>
        </Link>
      )}
    </MDiv>
  );
};

const ExternalLinkIcon = () => (
  <div
    dangerouslySetInnerHTML={{
      __html: require("_assets/icons/external-link.svg?include"),
    }}
    className={c("w-4 h-4", COLORS.secondaryFill)}
  />
);

export default ContentCardLinkView;
