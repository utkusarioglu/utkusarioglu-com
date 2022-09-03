import Link from "next/link";
import ContentLayout from "_layouts/content/Content.layout";
import P from "_primitives/paragraph/P.primitive";

const FourOFour = () => {
  return (
    <ContentLayout>
      <P>This page doesn&apos;t exist</P>
      <Link href="/" passHref>
        <a className="text-white p-3 bg-green-900 rounded-md block">Go home</a>
      </Link>
    </ContentLayout>
  );
};

export default FourOFour;
