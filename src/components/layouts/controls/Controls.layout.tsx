import { motion } from "framer-motion";
import { useRef } from "react";
import ExtraNavLayout from "_layouts/extra-nav/ExtraNav.layout";
import NavLayout from "_layouts/nav/Nav.layout";
import TitleLayout from "_layouts/title/Title.layout";
import CanvasLayout from "_layouts/canvas/Canvas.layout";
import { type MotionVariants } from "_types/vendors/framer-motion.types";
import { useAppContext } from "_contexts/app/App.context";

const ControlsLayout = () => {
  const { navigation } = useAppContext();
  const titleRef = useRef<HTMLDivElement>(null);
  const variants: MotionVariants<"div"> = {
    // initialAndAnimate: { opacity: controlHiddenRoute(route) ? 0 : 1 },
    initialAndAnimate: { opacity: navigation ? 1 : 0 },
  };
  return (
    <>
      <motion.div
        variants={variants}
        initial="initialAndAnimate"
        animate="initialAndAnimate"
      >
        <CanvasLayout />
        <ExtraNavLayout titleRef={titleRef} />
        <NavLayout titleRef={titleRef} />
      </motion.div>
      <TitleLayout ref={titleRef} />
    </>
  );
};

export default ControlsLayout;
