import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import { COLORS } from "_constants";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import Link from "next/link";
import Paragraph from "_primitives/Paragraph.primitive";
// import sizeOf from "image-size";
import { type ImageData } from "_primitives/enhanced-image/EnhancedImage.primitive.types";

const content = [
  "Quisque at enim suscipit, luctus felis sed, vehicula risus. Fusce sit amet diam consequat, viverra quam in, consectetur mi. Praesent lectus elit, convallis non metus et, sodales feugiat sapien. Donec neque urna, rutrum at risus a, malesuada tempus ex. Mauris ultrices massa sem, pretium tincidunt risus finibus eu. Aliquam erat volutpat. Nullam pharetra lacus eget fermentum congue. In hac habitasse platea dictumst. Sed venenatis nibh non quam ultricies gravida. Ut porta, dolor eget fermentum porta, massa diam posuere ante, in consequat ligula turpis et eros. Curabitur scelerisque tellus in sem iaculis accumsan. Vestibulum viverra nunc auctor semper lacinia. Nulla facilisi. Donec sed enim molestie, tempus justo in, ornare ex. Nulla faucibus tortor a nulla sodales, in pellentesque nisl ornare. ",
];

// export const getStaticProps = () => {
//   const {
//     default: { src, width, height, blurDataURL: blurDataUrl },
//   } = require("_assets/images/old-ship.jpg");
//   // const src = require("_assets/images/old-ship.jpg");
//   // const { src: blurDataUrl } = require("_assets/images/old-ship.jpg?lqip");

//   return {
//     props: {
//       musingsImage: {
//         src,
//         width,
//         height,
//         blurDataUrl,
//       },
//     },
//   };
// };

interface AboutPageProps {
  musingsImage: ImageData;
}

const AboutPage: FC<AboutPageProps> = ({ musingsImage }) => {
  return (
    <ContentLayout>
      <EnhancedImage
        className="rounded-md"
        alt="Musings title image"
        credits="photo by Utku Sarioglu"
        src={require("_assets/images/old-ship.jpg")}
      />
      <Paragraph>
        Click here for the
        <Link href="/artsy-fartsy" passHref>
          <a className={`bg-blue-700 rounded-sm px-1 ${COLORS.paragraph}`}>
            Artsy fartsy
          </a>
        </Link>
        content!1!!
      </Paragraph>
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </ContentLayout>
  );
};

export default AboutPage;
