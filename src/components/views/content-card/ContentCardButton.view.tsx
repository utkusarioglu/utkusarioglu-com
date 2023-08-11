import { type FC, type PropsWithChildren } from "react";
import { COLORS, TRANSITIONS, APP_ADDRESS } from "_config";
import MDiv from "_primitives/framer-motion/m-div.primitive";

type ContentCardButtonViewProps = PropsWithChildren<{
  onClick: () => void;
}>;

const ContentCardButtonView: FC<ContentCardButtonViewProps> = ({
  // href,
  onClick,
  children,
}) => {
  return (
    <MDiv
      className="mb-3 last:mb-0 rounded-lg"
      layout
      whileHover={{ backgroundColor: "#bbbbbb" }}
      transition={TRANSITIONS.routeFast}
    >
      <button
        onClick={onClick}
        className="cursor-pointer relative block w-full text-left"
      >
        {children}
      </button>
    </MDiv>
  );
};

export default ContentCardButtonView;
