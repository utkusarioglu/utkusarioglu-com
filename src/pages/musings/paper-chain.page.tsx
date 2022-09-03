import type { FC } from "react";
import { readFile } from "fs";
import type { GetStaticProps } from "next";
import ContentLayout from "_layouts/content/Content.layout";
import P from "_primitives/paragraph/P.primitive";
import PaperChainView from "_views/paper-chain/PaperChain.view";
import type { PaperChainEntry } from "_views/paper-chain-item/PaperChainItem.view.types";

interface PaperChainPageStaticProps {
  list: PaperChainEntry[];
  error: boolean;
}

type PaperChainPageProps = PaperChainPageStaticProps;

export const getStaticProps: GetStaticProps<
  PaperChainPageStaticProps
> = async () => {
  try {
    const { list } = await new Promise((resolve, reject) =>
      readFile(
        "assets/paper-chain/data.json",
        { encoding: "UTF-8" },
        (e, data) => {
          if (e) {
            console.log(e);
            return reject();
          }
          return resolve(JSON.parse(data));
        }
      )
    );
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

const PaperChainPage: FC<PaperChainPageProps> = ({ list, error }) => {
  if (error) {
    return (
      <ContentLayout>
        <P>Something went wrong 😔</P>
      </ContentLayout>
    );
  }

  if (!list.length) {
    return (
      <ContentLayout>
        <P>The list is empty 😲</P>
      </ContentLayout>
    );
  }

  return (
    <ContentLayout>
      <PaperChainView list={list} />
    </ContentLayout>
  );
};

export default PaperChainPage;
