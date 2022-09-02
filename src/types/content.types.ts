export type Section<ListType> = Entity & Listed<ListType>;

export type Entity = Titled & Partial<Printable & Remarked>;

export type Titled = {
  title: string; // one liner
};

export type Printable = {
  print: boolean;
};

export type Remarked = {
  remarks: string[]; // paragraph
};

export type Linked = {
  href: string; // url
};

export type Listed<ListType> = {
  list: ListType[];
};

export type Confided = {
  confident: boolean;
};

export type Screenable = {
  screen: boolean;
};
