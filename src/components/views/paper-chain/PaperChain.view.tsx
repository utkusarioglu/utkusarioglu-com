import PaperChainItemView from "_views/paper-chain-item/PaperChainItem.view";
import MOl from "_primitives/framer-motion/m-ol.primitive";
import MLi from "_primitives/framer-motion/m-li.primitive";
import { FC } from "react";
import type { PaperChainEntry } from "_views/paper-chain-item/PaperChainItem.view.types";

interface PaperChainViewProps {
  list: PaperChainEntry[];
}

const PaperChainView: FC<PaperChainViewProps> = ({ list }) => {
  return (
    <MOl className="mb-20" variants={variants.container}>
      {list.map((item) => (
        <MLi layout key={item.content} variants={variants.item}>
          <PaperChainItemView item={item} key={item.timestamp} />
        </MLi>
      ))}
    </MOl>
  );
};

const variants = {
  container: {
    animate: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  },
  item: {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export default PaperChainView;
