import type { FC } from "react";
import { readFile } from "fs";
import type { GetStaticProps } from "next";
import ContentLayout from "_layouts/content/Content.layout";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
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
        <Paragraph>Something went wrong 😔</Paragraph>
      </ContentLayout>
    );
  }

  if (!list.length) {
    return (
      <ContentLayout>
        <Paragraph>The list is empty 😲</Paragraph>
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
