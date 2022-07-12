import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";

const content = [
  " Quisque at enim suscipit, luctus felis sed, vehicula risus. Fusce sit amet diam consequat, viverra quam in, consectetur mi. Praesent lectus elit, convallis non metus et, sodales feugiat sapien. Donec neque urna, rutrum at risus a, malesuada tempus ex. Mauris ultrices massa sem, pretium tincidunt risus finibus eu. Aliquam erat volutpat. Nullam pharetra lacus eget fermentum congue. In hac habitasse platea dictumst. Sed venenatis nibh non quam ultricies gravida. Ut porta, dolor eget fermentum porta, massa diam posuere ante, in consequat ligula turpis et eros. Curabitur scelerisque tellus in sem iaculis accumsan. Vestibulum viverra nunc auctor semper lacinia. Nulla facilisi. Donec sed enim molestie, tempus justo in, ornare ex. Nulla faucibus tortor a nulla sodales, in pellentesque nisl ornare. ",
  " In malesuada nisi felis, non tincidunt nisl malesuada ut. Sed eu fermentum felis, vel consequat erat. Fusce turpis libero, vestibulum ut gravida ac, euismod et libero. Vestibulum nunc metus, bibendum nec fringilla eu, tristique eu mi. Maecenas placerat nulla id dolor consequat vehicula. Pellentesque volutpat purus quis tortor ullamcorper, eget consequat ipsum fringilla. Mauris molestie, massa nec tempus pulvinar, felis risus rutrum nibh, quis suscipit odio nunc a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec bibendum ullamcorper dolor, sit amet eleifend erat efficitur vitae. Vestibulum placerat dolor nec varius gravida. Mauris molestie augue nec leo porta efficitur. Curabitur tincidunt consectetur quam ac dapibus. Praesent rutrum libero sapien, id porttitor ex rutrum et. ",
  " Sed posuere ut neque nec fringilla.Nulla porta felis non elit lobortis rhoncus.Sed facilisis dignissim pharetra.Ut bibendum ullamcorper lectus vel ullamcorper.Etiam vestibulum urna ante, laoreet rutrum nunc fringilla nec.Maecenas vel maximus ex.Duis nec lectus elit.Sed iaculis enim non ultrices tristique.Vestibulum vehicula vulputate nibh ac ornare.Nunc condimentum tellus sem, a rhoncus erat porttitor eget.Nunc euismod libero et augue porta consequat.Donec auctor dui id lacus dignissim euismod.Mauris porttitor quis tellus eu mollis.Vivamus convallis efficitur malesuada.Fusce et eros a ex ullamcorper ornare.Duis a ex sed nisl aliquet mollis a faucibus dui. ",
];

interface AboutPageProps {}

const AboutPage: FC<AboutPageProps> = () => {
  return (
    <ContentLayout>
      <EnhancedImage
        className="rounded-full"
        alt="Utku Sarioglu"
        credits="photo by Onur Sarioglu"
        src={require("_assets/images/utku-1x1.jpg")}
      />
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
      <EnhancedImage
        className="rounded-md"
        alt="Musings title image"
        credits="photo by Utku Sarioglu"
        src={require("_assets/images/old-ship.jpg")}
      />
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </ContentLayout>
  );
};

export default AboutPage;
