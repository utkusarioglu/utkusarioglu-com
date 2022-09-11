import { type FC } from "react";
import { COLORS } from "_config";
import { useTheme } from "_hooks/theme/theme.hook";
import AnimatedLink from "_primitives/animated-link/AnimatedLink.primitive";
import NavItem from "_views/nav-item/NavItem.view";
import { type ExtraNavViewProps } from "./ExtraNav.view.types";
import { useCanvas } from "_contexts/canvas/Canvas.context";
import c from "classnames";

const ExtraNavView: FC<ExtraNavViewProps> = ({ mode }) => {
  const { toggleActive, saveTheme, getActive } = useTheme();
  const { config, draw, presets, produceConfig } = useCanvas();
  const orientation = mode !== "aside" ? "row" : "col";

  const toggleAndSaveTheme = () => {
    saveTheme(toggleActive());
    const newConfig = produceConfig(presets[getActive()], config.seed);
    draw(newConfig);
  };

  return (
    <div className={`flex flex-${orientation}`}>
      <NavItem
        title="Canvas"
        type="extra"
        href="/canvas"
        fontSize="small"
        mode={mode}
      />
      <AnimatedLink href="theme" paddingAndMargins="">
        <a
          className={c(COLORS.extra, "font-display text-3xl cursor-pointer", {
            "pl-5": mode === "aside",
            "mr-5": mode === "bottom",
          })}
          onClick={toggleAndSaveTheme}
        >
          Theme
        </a>
      </AnimatedLink>
    </div>
  );
};

export default ExtraNavView;
