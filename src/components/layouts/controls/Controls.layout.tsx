import { useRef, type FC } from "react";
import ExtraNavLayout from "_layouts/extra-nav/ExtraNav.layout";
import NavLayout from "_layouts/nav/Nav.layout";
import TitleLayout from "_layouts/title/Title.layout";
import CanvasLayout from "_layouts/canvas/Canvas.layout";
import ImageViewerLayout from "_layouts/image-viewer/ImageViewer.layout";

interface ControlsLayoutProps {
  route: string;
}

const ControlsLayout: FC<ControlsLayoutProps> = ({ route }) => {
  const titleRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <ImageViewerLayout />
      <CanvasLayout />
      <ExtraNavLayout titleRef={titleRef} />
      <NavLayout titleRef={titleRef} />
      <TitleLayout ref={titleRef} />
    </>
  );
};

export default ControlsLayout;
