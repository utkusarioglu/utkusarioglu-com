import Link from "next/link";
import ContentLayout from "_layouts/content/Content.layout";

const FourOFour = () => {
  return (
    <ContentLayout>
      <p className="text-white">where?</p>
      <Link href="/" passHref>
        <a className="text-white p-3 bg-green-900 rounded-md block">Go home</a>
      </Link>
    </ContentLayout>
  );
};

export default FourOFour;
