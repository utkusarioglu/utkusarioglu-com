import { lazy, Suspense, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useLayoutContext } from "_contexts/layout/Layout.context";
// import { ImageViewerView } from "_views/image-viewer/ImageViewer.view";

const ImageViewerLayout = () => {
  const { imageViewer } = useLayoutContext();
  const LazyImageViewerView = useMemo(
    () => lazy(() => import("_views/image-viewer/ImageViewer.view")),
    []
  );

  return (
    <AnimatePresence>
      {!!imageViewer && (
        <Suspense fallback={null}>
          <LazyImageViewerView imageViewer={imageViewer} />
        </Suspense>
      )}
    </AnimatePresence>
  );
};

export default ImageViewerLayout;
