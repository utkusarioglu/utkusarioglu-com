import { type FC, useEffect, useState } from "react";
import { useJokeChooser } from "_hooks/trucker-jokes/trucker-jokes.hook";
import { AnimatePresence } from "framer-motion";
import MDiv from "_primitives/framer-motion/m-div.primitive";
import { TRANSITIONS } from "_config";
import TruckerJokesTextView from "_views/trucker-jokes-text/TruckerJokesText.view";
import type { JokeList } from "_hooks/trucker-jokes/trucker-jokes.hook.types";
import c from "classnames";

interface TruckerJokesLayoutProps {
  list: JokeList;
}

const TruckerJokesLayout: FC<TruckerJokesLayoutProps> = ({ list }) => {
  const [joke, usedPercent, chooseJoke] = useJokeChooser(list);
  const [palette, setPalette] = useState(starterPalette);

  useEffect(
    () => {
      setPalette(randomPalette());
      chooseJoke();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div
      onClick={chooseJoke}
      className={c("relative w-full h-full overflow-hidden", palette)}
    >
      <MDiv
        className="h-full absolute top-0 left-0"
        style={{
          backdropFilter: "brightness(0.95)",
        }}
        animate={{
          width: `${usedPercent}%`,
        }}
        transition={TRANSITIONS.routeFast}
      />
      <AnimatePresence initial={false}>
        <TruckerJokesTextView key={joke} joke={joke} />
      </AnimatePresence>
    </div>
  );
};

const palettes = [
  "bg-black text-neutral-500",
  "bg-neutral-600 text-black",
  "bg-red-900 text-white",
  "bg-teal-900 text-emerald-500",
];

const starterPalette =
  "bg-neutral-200 text-neutral-200 dark:bg-neutral-900 dark:text-neutral-900";

function randomPalette(): string {
  const random = Math.round(Math.random() * (palettes.length - 1));
  return palettes[random];
}

export default TruckerJokesLayout;
