import { type FC } from "react";
import type { PaperChainItemViewProps } from "./PaperChainItem.view.types";

const PaperChainItemView: FC<PaperChainItemViewProps> = ({
  item: { content, timestamp, notes, style, styles, classes },
}) => {
  const date = new Date(timestamp);
  return (
    <div
      className={[
        "p-5 rounded-lg flex flex-col",
        "justify-end mb-5 text-base text-white",
        classes?.container,
      ].join(" ")}
      style={{ ...style, ...styles?.container }}
    >
      {Array.isArray(content) ? (
        content.map((paragraph) => (
          <p
            key={paragraph.slice(0, 10)}
            style={styles?.paragraph}
            className={["mb-3", classes?.paragraph].join(" ")}
          >
            {paragraph}
          </p>
        ))
      ) : (
        <p
          style={styles?.paragraph}
          className={["mb-3", classes?.paragraph].join(" ")}
        >
          {content}
        </p>
      )}
      <div
        className={["flex justify-end", classes?.details].join(" ")}
        style={styles?.details}
      >
        {!!notes && (
          <span
            className={["mr-2 text-base", classes?.notes].join(" ")}
            style={styles?.notes}
          >
            ♫
          </span>
        )}
        <span
          className={["text-base", classes?.date].join(" ")}
          style={styles?.date}
        >
          {date.toDateString()}
        </span>
      </div>
    </div>
  );
};

export default PaperChainItemView;
