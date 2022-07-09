import Link from "next/link";
import PageLayout from "_layouts/page/Page.layout";

const FourOFour = () => {
  return (
    <PageLayout>
      <p className="text-white">where?</p>
      <Link href="/" passHref>
        <a className="text-white p-3 bg-green-900 rounded-md block">Go home</a>
      </Link>
    </PageLayout>
  );
};

export default FourOFour;
