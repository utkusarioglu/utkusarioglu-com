import { type FC, type PropsWithChildren } from "react";
import Link from "next/link";
import { COLORS } from "_config";
import c from "classnames";

type HyperlinkProps = PropsWithChildren<{
  href: string;
}>;

const Hyperlink: FC<HyperlinkProps> = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <a className={c(COLORS.paragraph, "bg-blue-700 rounded-sm px-1")}>
        {children}
      </a>
    </Link>
  );
};

export default Hyperlink;
