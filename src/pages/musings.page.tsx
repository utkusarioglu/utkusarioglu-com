import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
import Hyperlink from "_primitives/hyperlink/Hyperlink.primitive";
import { MAX_W_PROSE } from "_constants";

const content = [
  "Quisque at enim suscipit, luctus felis sed, vehicula risus. Fusce sit amet diam consequat, viverra quam in, consectetur mi. Praesent lectus elit, convallis non metus et, sodales feugiat sapien. Donec neque urna, rutrum at risus a, malesuada tempus ex. Mauris ultrices massa sem, pretium tincidunt risus finibus eu. Aliquam erat volutpat. Nullam pharetra lacus eget fermentum congue. In hac habitasse platea dictumst. Sed venenatis nibh non quam ultricies gravida. Ut porta, dolor eget fermentum porta, massa diam posuere ante, in consequat ligula turpis et eros. Curabitur scelerisque tellus in sem iaculis accumsan. Vestibulum viverra nunc auctor semper lacinia. Nulla facilisi. Donec sed enim molestie, tempus justo in, ornare ex. Nulla faucibus tortor a nulla sodales, in pellentesque nisl ornare. ",
];

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <ContentLayout>
      <EnhancedImage
        className="rounded-md"
        alt="Musings title image"
        credits="photo by Utku Sarioglu"
        src={require("_assets/images/old-ship.jpg")}
        maxResponsiveWidth={MAX_W_PROSE}
      />
      <Paragraph>
        Click here for the
        <Hyperlink href="/musings/artsy">Artsy Fartsy</Hyperlink>
        content!1!!
      </Paragraph>
      <Paragraph>
        This goes to the{" "}
        <Hyperlink href="/musings/paper-chain">Paper Chain</Hyperlink> a project
        in collaboration with Bossonica
      </Paragraph>
      <Paragraph>
        Amazing
        <Hyperlink href="/musings/kamyon">Trucker jokes</Hyperlink>
        but they are in Turkish
      </Paragraph>
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </ContentLayout>
  );
};

export default AboutPage;
