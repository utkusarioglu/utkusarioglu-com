import type { FC } from "react";
import { useEffect } from "react";
import type { JokeDisplayViewProps } from "./trucker-joke.types";
// import "./TruckerJoke.view.scss";
import {
  useJokeFetch,
  useJokeChooser,
} from "../../../hooks/trucker-joke.hooks";

const TruckerJokeView = () => {
  const jokes = useJokeFetch();

  if (!jokes.timestamp) {
    // means still loading
    return null;
  }

  if (jokes.error) {
    return (
      <span style={{ color: "red" }}>
        Something went wrong during fetch operation
      </span>
    );
  }

  if (!jokes.list.length) {
    return <span>Hiç yok ki...</span>;
  }

  return <JokeDisplayView jokeList={jokes.list} />;
};

const JokeDisplayView: FC<JokeDisplayViewProps> = ({ jokeList: jokes }) => {
  const [joke, usedPercent, chooseJoke] = useJokeChooser(jokes);

  useEffect(() => {
    chooseJoke();
  }, [chooseJoke]);

  return (
    <>
      <div className="joke">{joke}</div>
      <div className="joke--used-ratio" style={{ width: `${usedPercent}%` }} />
      <div className="joke--click-catcher" onClick={chooseJoke} />
    </>
  );
};

export default TruckerJokeView;
