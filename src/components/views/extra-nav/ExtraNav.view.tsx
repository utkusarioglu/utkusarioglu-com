import { type FC } from "react";
import { COLORS } from "_constants";
import { useTheme } from "_hooks/theme/theme.hook";
import AnimatedLink from "_primitives/animated-link/AnimatedLink.primitive";
import NavItem from "_views/nav-item/NavItem.view";
import { type ExtraNavViewProps } from "./ExtraNav.view.types";

const ExtraNavView: FC<ExtraNavViewProps> = ({ mode }) => {
  const { toggleActive, saveTheme } = useTheme();
  const orientation = mode !== "aside" ? "row" : "col";
  const lastItemPadding = mode === "bottom" && "mr-5";

  const toggleAndSaveTheme = () => {
    saveTheme(toggleActive());
  };

  return (
    <div className={`flex flex-${orientation}`}>
      <NavItem
        title="Canvas"
        type="extra"
        href="/canvas"
        show={true}
        fontSize="small"
        mode={mode}
      />
      <AnimatedLink href="theme" paddingAndMargins="">
        <a
          className={[
            "font-display text-3xl cursor-pointer",
            mode === "aside" && "pl-5",
            COLORS.extra,
            lastItemPadding,
          ].join(" ")}
          onClick={toggleAndSaveTheme}
        >
          Theme
        </a>
      </AnimatedLink>
    </div>
  );
};

export default ExtraNavView;
