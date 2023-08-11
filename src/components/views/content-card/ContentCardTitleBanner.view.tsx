import { type FC } from "react";
import H2 from "_primitives/headings/H2.primitive";
import H3 from "_primitives/headings/H3.primitive";
import c from "classnames";

interface ContentCardTitleBannerViewProps {
  title: string;
  subtitle: string;
}

const ContentCardTitleBannerView: FC<ContentCardTitleBannerViewProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div
      className={c(
        "flex flex-row w-full",
        "place-content-between mb-3 items-center"
      )}
    >
      <H2 margins={false} className="px-5">
        {title}
      </H2>
      <H3 margins={false} className="px-5">
        {subtitle}
      </H3>
    </div>
  );
};

export default ContentCardTitleBannerView;
