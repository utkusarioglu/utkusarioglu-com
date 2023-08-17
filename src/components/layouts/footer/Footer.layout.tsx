import { COLORS, APP_NAME } from "_config";
import Link from "next/link";
import c from "classnames";

const FooterLayout = () => {
  return (
    <div className="flex items-center print:hidden">
      <Link href="/credits">
        <a
          className={c(
            COLORS.secondaryText,
            "height-12 p-5 text-center w-full"
          )}
        >
          {new Date().getFullYear()} {APP_NAME}
        </a>
      </Link>
    </div>
  );
};

export default FooterLayout;
