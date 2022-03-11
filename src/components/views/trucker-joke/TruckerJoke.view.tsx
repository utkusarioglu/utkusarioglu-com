import type { FC } from "react";
import { useEffect, useState, useCallback } from "react";
import "./TruckerJokes.view.scss";

type Jokes = string[];

const TruckerJokeView = () => {
  const [jokes, setJokes] = useState<Jokes>([]);

  useEffect(() => {
    fetch("/trucker-jokes/1.json")
      .then((response) => response.json())
      .then((json) => {
        setJokes(json);
        return json.length;
      });
  }, []);

  if (!jokes.length) {
    return null;
  }

  return <JokeDisplayView jokes={jokes} />;
};

interface JokeDisplayViewProps {
  jokes: Jokes;
}

const JokeDisplayView: FC<JokeDisplayViewProps> = ({ jokes }) => {
  const [joke, setJoke] = useState("");

  const chooseJoke = useCallback(() => {
    const jokeIndex = Math.round(Math.random() * (jokes.length - 1));
    setJoke(jokes[jokeIndex]);
  }, [jokes]);

  useEffect(() => {
    chooseJoke();
  }, []);

  return (
    <>
      <div className="joke">{joke}</div>
      <div
        className="joke-click-catcher"
        onClick={() => {
          chooseJoke();
        }}
      />
    </>
  );
};

export default TruckerJokeView;
