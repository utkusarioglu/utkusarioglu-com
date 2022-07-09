import { useRef } from "react";
import PageLayout from "_layouts/page/Page.layout";
import CanvasControlLayout from "_layouts/canvas-control/CanvasControl.layout";

const CanvasPage = () => {
  const dragConstraints = useRef(null);
  return (
    <PageLayout
      ref={dragConstraints}
      footer={false}
      alignment="self-end"
      smShimBottom={false}
      smShimTop={false}
      overflowY={false}
    >
      <CanvasControlLayout dragConstraintsRef={dragConstraints} />
    </PageLayout>
  );
};

export default CanvasPage;
