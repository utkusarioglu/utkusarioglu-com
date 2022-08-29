import { type FC } from "react";
import type { PaperChainItemViewProps } from "./PaperChainItem.view.types";
import c from "classnames";

const PaperChainItemView: FC<PaperChainItemViewProps> = ({
  item: { content, timestamp, notes, style, styles, classes },
}) => {
  const date = new Date(timestamp);
  return (
    <div
      className={c(
        "p-5 rounded-lg flex flex-col",
        "justify-end mb-5 text-base text-white",
        classes?.container
      )}
      style={{ ...style, ...styles?.container }}
    >
      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 10)}
            style={styles?.paragraph}
            className={c("mb-3", classes?.paragraph)}
          >
            {paragraph}
          </p>
        ))
      ) : (
        <p style={styles?.paragraph} className={c("mb-3", classes?.paragraph)}>
          {content}
        </p>
      )}
      <div
        className={c("flex justify-end", classes?.details)}
        style={styles?.details}
      >
        {!!notes && (
          <span
            className={c("mr-2 text-base", classes?.notes)}
            style={styles?.notes}
          >
            ♫
          </span>
        )}
        <span className={c("text-base", classes?.date)} style={styles?.date}>
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default PaperChainItemView;
