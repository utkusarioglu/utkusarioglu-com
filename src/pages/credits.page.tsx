import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import { MAX_W_CONTENT } from "_config";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import VerticalMarginsLayout from "_layouts/vertical-margins/VerticalMargins.layout";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import { parse } from "yaml";
import { readFileSync } from "fs";
import { type Credits } from "_types/credits.types";
import SourceCodeItemView from "../components/views/credits/SourceCodeItem.view";
import CreditsInspirationView from "../components/views/credits/CreditsInspiration.view";
import CreditsTechStackItemView from "../components/views/credits/CreditsTechStackItem.view";

interface CreditsPageProps {
  credits: Credits;
}

export function getStaticProps() {
  const credits = parse(
    readFileSync("assets/credits.yml", { encoding: "UTF-8" })
  ) as Credits;

  return {
    props: {
      credits,
    },
  };
}

const CreditsPage: FC<CreditsPageProps> = ({
  credits: { inspiration, sourceCode, techStack },
}) => {
  return (
    <ContentLayout verticalMargins={false}>
      <VerticalMarginsLayout className="print:hidden">
        <EnhancedImage
          className="rounded-md"
          alt="Resume title image"
          credits="photo by Utku Sarioglu"
          src={require("_assets/images/camp-fire.jpg")}
          maxResponsiveWidth={MAX_W_CONTENT}
        />
      </VerticalMarginsLayout>

      <CreditsInspirationView {...inspiration} />
      <ContentCardBackgroundLayout>
        <ContentCardSectionView
          {...sourceCode}
          listItemComponent={({ item }) => <SourceCodeItemView {...item} />}
        />
      </ContentCardBackgroundLayout>

      <ContentCardBackgroundLayout>
        <ContentCardSectionView
          {...techStack}
          listItemComponent={({ item }) => (
            <ContentCardItemLayout>
              <CreditsTechStackItemView {...item} />
            </ContentCardItemLayout>
          )}
        />
      </ContentCardBackgroundLayout>
    </ContentLayout>
  );
};

export default CreditsPage;
