import { type FC } from "react";
import { MAX_W_CONTENT } from "_config";
import ContentLayout from "_layouts/content/Content.layout";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import P from "_primitives/paragraph/P.primitive";
import { parse } from "yaml";
import { readFileSync } from "fs";
import type { About } from "_types/about.types";

export interface AboutPageProps {
  about: About;
}

export function getStaticProps() {
  const about = parse(
    readFileSync("assets/about.yml", { encoding: "UTF-8" })
  ) as About;

  return {
    props: {
      about,
    },
  };
}

const AboutPage: FC<AboutPageProps> = ({ about }) => {
  return (
    <ContentLayout>
      {about.items.map((item) => {
        switch (item.type) {
          case "paragraph":
            return <P key={item.content}>{item.content}</P>;
          case "image":
            return (
              <EnhancedImage
                className="rounded-full"
                alt={item.alt}
                credits={item.credits}
                // src={require(item.src)}
                src={require("_assets/images/utku-1x1.jpg")}
                maxResponsiveWidth={MAX_W_CONTENT}
              />
            );
        }
      })}
    </ContentLayout>
  );
};

export default AboutPage;
