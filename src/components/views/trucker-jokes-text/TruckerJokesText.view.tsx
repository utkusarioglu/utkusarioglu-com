import { type FC } from "react";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import type { Joke } from "_hooks/trucker-jokes/trucker-jokes.hook.types";
import c from "classnames";

interface TruckerJokesTextViewProps {
  joke: Joke;
}

const TruckerJokesTextView: FC<TruckerJokesTextViewProps> = ({ joke }) => {
  return (
    <MDiv
      layout
      initial={{
        transform: "scale(2)",
        opacity: 0,
      }}
      animate={{
        transform: "scale(1)",
        opacity: 1,
        transition: {
          type: "spring",
          duration: 0.5,
          damping: 10,
        },
      }}
      exit={{
        transform: "scale(0.2)",
        opacity: 0,
        transition: {
          type: "easeIn",
          duration: 0.3,
        },
      }}
      className={c(
        "absolute top-0 left-0 w-full h-full flex",
        "flex-col justify-center leading-tight"
      )}
    >
      <div
        className="text-center px-10 text-[60px]"
        style={{
          fontSize: "min(13vw, 13vh)",
          fontFamily: "caveat, arial",
        }}
      >
        {joke}
      </div>
    </MDiv>
  );
};

export default TruckerJokesTextView;
