import { COLORS, APP_NAME } from "_constants";
import Link from "next/link";

const FooterLayout = () => {
  return (
    <div className="flex items-center">
      <Link href="/credits">
        <a
          className={[
            "height-12 p-5 text-center w-full",
            COLORS.secondaryText,
          ].join(" ")}
        >
          {new Date().getFullYear()} {APP_NAME}
        </a>
      </Link>
    </div>
  );
};

export default FooterLayout;
