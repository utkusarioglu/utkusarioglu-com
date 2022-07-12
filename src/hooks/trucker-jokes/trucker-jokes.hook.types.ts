export type Joke = string;

export type JokeList = Joke[];

export interface JokeStructure {
  remaining: JokeList;
  used: JokeList;
  current: Joke;
  usedPercent: number;
}
