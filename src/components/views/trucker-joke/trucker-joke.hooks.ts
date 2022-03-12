import { useEffect, useState, useCallback } from "react";
import type {
  Joke,
  JokeList,
  JokeStructure,
  JokeFetch,
} from "./trucker-joke.types";
import ReactGA from "react-ga";

/**
 * Fetches the jokes from the server
 */
export function useJokeFetch() {
  const [jokeFetch, setJokeFetch] = useState<JokeFetch>({
    timestamp: 0,
    list: [],
    error: false,
  });

  useEffect(() => {
    fetch("/trucker-jokes/list.txt")
      .then((response) => response.text())
      .then((jokeList) => {
        if (jokeList.startsWith("<")) {
          throw new Error("Nonexistent Source");
        }
        setJokeFetch({
          timestamp: Date.now(),
          list: jokeList
            .split("\n")
            .map((item) => item.trim())
            .filter((entry) => entry.length && !entry.startsWith("#")),
          error: false,
        });
      })
      .catch((error) => {
        console.error(error);
        setJokeFetch({
          timestamp: Date.now(),
          list: [],
          error: true,
        });
      });
  }, []);

  return jokeFetch;
}

/**
 * Hook for handling random selection of a joke
 * @dev
 * BUG
 * There is a bug involved wit this hook. When the `remaining` list is
 * empty, refilling of the list results on the hook running twice and pushing
 * 2 items to `used` list.
 */
export function useJokeChooser(jokes: JokeList): [Joke, () => void] {
  const [{ remaining, used, current }, setJoke] = useState<JokeStructure>({
    remaining: [...jokes],
    used: [],
    current: "",
  });

  const chooseJoke = useCallback(() => {
    const [source, sink] = !remaining.length ? [used, []] : [remaining, used];
    const randomIndex = Math.round(Math.random() * (source.length - 1));
    const current = source.splice(randomIndex, 1)[0];
    sink.push(current);
    ReactGA.event({
      category: "navigation",
      action: "read new joke",
    });

    setJoke({
      remaining: source,
      used: sink,
      current,
    });
  }, [remaining, used]);

  return [current, chooseJoke];
}
