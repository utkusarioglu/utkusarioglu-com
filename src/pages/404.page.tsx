import Link from "next/link";
import ContentLayout from "_layouts/content/Content.layout";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";

const FourOFour = () => {
  return (
    <ContentLayout>
      <Paragraph>This page doesn&apos;t exist</Paragraph>
      <Link href="/" passHref>
        <a className="text-white p-3 bg-green-900 rounded-md block">Go home</a>
      </Link>
    </ContentLayout>
  );
};

export default FourOFour;
