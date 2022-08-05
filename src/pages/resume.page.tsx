import ContentLayout from "_layouts/content/Content.layout";
import { COLORS } from "_constants";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";

const content = [
  " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ac massa et metus elementum convallis. Aliquam sed laoreet est, id auctor neque. Suspendisse euismod, augue id tempus venenatis, eros sapien finibus odio, et sagittis erat quam a orci. In hac habitasse platea dictumst. Vestibulum arcu turpis, cursus placerat leo aliquam, porttitor euismod purus. Sed urna nunc, vestibulum non commodo at, fermentum ac ipsum. Nunc tempus ex non vestibulum mollis. Ut pharetra hendrerit justo, ac varius odio placerat ut. Nunc vitae ligula ut quam cursus consectetur. Maecenas euismod sapien ut magna viverra, ultrices pharetra enim dictum. Mauris pretium nisi purus, quis pretium diam venenatis ornare. Vestibulum tortor dolor, convallis eget lectus et, elementum rhoncus nisl. Curabitur consectetur odio at augue egestas porta. Praesent ut leo non turpis suscipit finibus sed nec augue. Sed magna velit, eleifend sed porttitor non, dictum non odio. Integer ac nunc rutrum tortor rutrum commodo eget vel risus. ",
  " Sed posuere ut neque nec fringilla.Nulla porta felis non elit lobortis rhoncus.Sed facilisis dignissim pharetra.Ut bibendum ullamcorper lectus vel ullamcorper.Etiam vestibulum urna ante, laoreet rutrum nunc fringilla nec.Maecenas vel maximus ex.Duis nec lectus elit.Sed iaculis enim non ultrices tristique.Vestibulum vehicula vulputate nibh ac ornare.Nunc condimentum tellus sem, a rhoncus erat porttitor eget.Nunc euismod libero et augue porta consequat.Donec auctor dui id lacus dignissim euismod.Mauris porttitor quis tellus eu mollis.Vivamus convallis efficitur malesuada.Fusce et eros a ex ullamcorper ornare.Duis a ex sed nisl aliquet mollis a faucibus dui. ",
  " Quisque at enim suscipit, luctus felis sed, vehicula risus. Fusce sit amet diam consequat, viverra quam in, consectetur mi. Praesent lectus elit, convallis non metus et, sodales feugiat sapien. Donec neque urna, rutrum at risus a, malesuada tempus ex. Mauris ultrices massa sem, pretium tincidunt risus finibus eu. Aliquam erat volutpat. Nullam pharetra lacus eget fermentum congue. In hac habitasse platea dictumst. Sed venenatis nibh non quam ultricies gravida. Ut porta, dolor eget fermentum porta, massa diam posuere ante, in consequat ligula turpis et eros. Curabitur scelerisque tellus in sem iaculis accumsan. Vestibulum viverra nunc auctor semper lacinia. Nulla facilisi. Donec sed enim molestie, tempus justo in, ornare ex. Nulla faucibus tortor a nulla sodales, in pellentesque nisl ornare. ",
  " In malesuada nisi felis, non tincidunt nisl malesuada ut. Sed eu fermentum felis, vel consequat erat. Fusce turpis libero, vestibulum ut gravida ac, euismod et libero. Vestibulum nunc metus, bibendum nec fringilla eu, tristique eu mi. Maecenas placerat nulla id dolor consequat vehicula. Pellentesque volutpat purus quis tortor ullamcorper, eget consequat ipsum fringilla. Mauris molestie, massa nec tempus pulvinar, felis risus rutrum nibh, quis suscipit odio nunc a velit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec bibendum ullamcorper dolor, sit amet eleifend erat efficitur vitae. Vestibulum placerat dolor nec varius gravida. Mauris molestie augue nec leo porta efficitur. Curabitur tincidunt consectetur quam ac dapibus. Praesent rutrum libero sapien, id porttitor ex rutrum et. ",
];

const ResumePage = () => {
  return (
    <ContentLayout>
      <EnhancedImage
        className="rounded-md"
        alt="Resume title image"
        credits="photo by Utku Sarioglu"
        src={require("_assets/images/waves-and-bird.jpg")}
      />
      {content.map((paragraph) => (
        <p className={`mb-5 text-base ${COLORS.paragraph}`} key={paragraph}>
          {paragraph}
        </p>
      ))}
    </ContentLayout>
  );
};

export default ResumePage;