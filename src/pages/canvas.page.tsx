import { useRef } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import CanvasControlLayout from "_layouts/canvas-control/CanvasControl.layout";

/**
 * @dev
 * 1- Removes undefined type error from ref
 */
const CanvasPage = () => {
  const dragConstraints = useRef(null);
  return (
    <ContentLayout
      ref={dragConstraints}
      footer={false}
      alignment="self-end"
      smShimBottom={false}
      smShimTop={false}
      overflowY={false}
    >
      <CanvasControlLayout
        // @ts-ignore #1
        dragConstraintsRef={dragConstraints}
      />
    </ContentLayout>
  );
};

export default CanvasPage;
