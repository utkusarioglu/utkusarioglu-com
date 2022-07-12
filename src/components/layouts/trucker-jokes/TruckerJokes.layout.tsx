import { type FC, useEffect, useState } from "react";
import { useJokeChooser } from "_hooks/trucker-jokes/trucker-jokes.hook";
import { AnimatePresence, motion } from "framer-motion";
import { TRANSITIONS } from "_constants";
import TruckerJokesTextView from "_views/trucker-jokes-text/TruckerJokesText.view";
import type { JokeList } from "_hooks/trucker-jokes/trucker-jokes.hook.types";

interface TruckerJokesLayoutProps {
  list: JokeList;
}

const TruckerJokesLayout: FC<TruckerJokesLayoutProps> = ({ list }) => {
  const [joke, usedPercent, chooseJoke] = useJokeChooser(list);
  const [palette, setPalette] = useState(starterPalette);

  useEffect(() => {
    setPalette(randomPalette());
    chooseJoke();
  }, []);

  return (
    <div
      onClick={chooseJoke}
      className={["relative w-full h-full overflow-hidden", palette].join(" ")}
    >
      <motion.div
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
