import type { FC } from "react";
import { readFile } from "fs";
import ContentLayout from "_layouts/content/Content.layout";
import Head from "next/head";
import type { GetStaticProps } from "next";
import TruckerJokesLayout from "_layouts/trucker-jokes/TruckerJokes.layout";
import type { JokeList } from "_hooks/trucker-jokes/trucker-jokes.hook.types";

interface TruckerJokesPageStaticProps {
  error: boolean;
  list: JokeList;
}

type TruckerJokesPageProps = TruckerJokesPageStaticProps;

const TruckerJokesPage: FC<TruckerJokesPageProps> = ({ list }) => {
  return (
    <>
      <Head>
        {/* eslint-disable @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&display=block"
          rel="stylesheet"
        />
      </Head>
      <ContentLayout allowEntireViewport>
        <TruckerJokesLayout list={list} />
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps<
  TruckerJokesPageStaticProps
> = async () => {
  try {
    const list = await new Promise<JokeList>((resolve, reject) => {
      readFile(
        "assets/trucker-jokes/list.txt",
        { encoding: "UTF-8" },
        (err, data) => {
          if (err) {
            reject(err);
          }
          const list = data
            .split("\n")
            .map((item) => item.trim())
            .filter((entry) => entry.length && !entry.startsWith("#"));
          resolve(list);
        }
      );
    });
    return {
      props: {
        error: false,
        list,
      },
    };
  } catch (e) {
    return {
      props: {
        error: true,
        list: [],
      },
    };
  }
};

export default TruckerJokesPage;
