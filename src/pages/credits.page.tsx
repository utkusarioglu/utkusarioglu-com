import ContentLayout from "_layouts/content/Content.layout";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";

const content = ["Runs on aws", "Also, other things"];

const ResumePage = () => {
  return (
    <ContentLayout>
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </ContentLayout>
  );
};

export default ResumePage;
