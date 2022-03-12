export type Joke = string;
export type JokeList = Joke[];

export interface JokeDisplayViewProps {
  jokeList: JokeList;
}

export interface JokeFetch {
  timestamp: number; // epoch
  list: JokeList;
  error: boolean;
}

export interface JokeStructure {
  remaining: JokeList;
  used: JokeList;
  current: Joke;
}
