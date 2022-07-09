import PageLayout from "_layouts/page/Page.layout";
import { COLORS } from "_constants";
import Paragraph from "_primitives/Paragraph.primitive";

const content = ["Runs on aws", "Also, other things"];

const ResumePage = () => {
  return (
    <PageLayout>
      {content.map((paragraph) => (
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      ))}
    </PageLayout>
  );
};

export default ResumePage;
