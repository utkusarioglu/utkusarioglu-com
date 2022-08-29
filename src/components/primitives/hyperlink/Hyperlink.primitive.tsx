import type { FC, ReactNode } from "react";
import Link from "next/link";
import { COLORS } from "_constants";
import c from "classnames";

interface HyperlinkProps {
  href: string;
  children: ReactNode;
}

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
