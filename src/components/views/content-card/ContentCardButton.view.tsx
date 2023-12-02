import { type FC, type PropsWithChildren } from "react";
import { TRANSITIONS } from "_config";
import MDiv from "_primitives/framer-motion/m-div.primitive";

type ContentCardButtonViewProps = PropsWithChildren<{
  onClick: () => void;
  isActive?: boolean;
}>;

const ContentCardButtonView: FC<ContentCardButtonViewProps> = ({
  // href,
  onClick,
  children,
  isActive,
}) => {
  const idleBoxShadow = isActive
    ? "0px 0px 5px 5px #52A25D inset"
    : "0px 0px 0px 0px transparent inset";

  return (
    <MDiv
      className="mb-3 last:mb-0 rounded-lg"
      layout
      style={{
        boxShadow: idleBoxShadow,
      }}
      whileHover={{
        boxShadow: "0px 0px 8px 8px #7FA4AC inset",
      }}
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
