import ContentLayout from "_layouts/content/Content.layout";
import P from "_primitives/paragraph/P.primitive";

const content = ["Runs on aws", "Also, other things"];

const ResumePage = () => {
  return (
    <ContentLayout>
      {content.map((paragraph) => (
        <P key={paragraph}>{paragraph}</P>
      ))}
    </ContentLayout>
  );
};

export default ResumePage;
