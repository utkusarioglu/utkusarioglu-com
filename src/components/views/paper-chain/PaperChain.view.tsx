import PaperChainItemView from "_views/paper-chain-item/PaperChainItem.view";
import type { FC } from "react";
import type { PaperChainEntry } from "_views/paper-chain-item/PaperChainItem.view.types";

interface PaperChainViewProps {
  list: PaperChainEntry[];
}

const PaperChainView: FC<PaperChainViewProps> = ({ list }) => {
  return (
    <ol>
      {list.map((item) => (
        <li key={item.content}>
          <PaperChainItemView item={item} key={item.timestamp} />
        </li>
      ))}
    </ol>
  );
};

// const variants = {
//   container: {
//     animate: {
//       transition: {
//         delayChildren: 0.1,
//         staggerChildren: 0.2,
//       },
//     },
//   },
//   item: {
//     initial: {
//       y: 50,
//       opacity: 0,
//     },
//     animate: {
//       y: 0,
//       opacity: 1,
//       duration: 0.4,
//       ease: "easeOut",
//     },
//   },
// };

export default PaperChainView;
