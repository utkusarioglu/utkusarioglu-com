import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import P from "_primitives/paragraph/P.primitive";
import { readFileSync } from "fs";
import { parse } from "yaml";
import { COLORS, MAX_W_PROSE } from "_constants";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import H3 from "_primitives/headings/H3.primitive";
import VerticalMarginsLayout from "_layouts/vertical-margins/VerticalMargins.layout";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardParagraphView from "_views/content-card/ContentCardParagraph.view";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import { Musings } from "_types/musings.types";
interface MusingsPageProps {
  musings: Musings;
}

export function getStaticProps() {
  const musings = parse(
    readFileSync("assets/musings.yml", { encoding: "UTF-8" })
  ) as Musings;

  return {
    props: {
      musings,
    },
  };
}

const AboutPage: FC<MusingsPageProps> = ({
  musings: { sections, remarks },
}) => {
  return (
    <ContentLayout verticalMargins={false}>
      <VerticalMarginsLayout>
        <EnhancedImage
          className="rounded-md"
          alt="Musings title image"
          credits="photo by Utku Sarioglu"
          src={require("_assets/images/old-ship.jpg")}
          maxResponsiveWidth={MAX_W_PROSE}
        />
        <div className="mb-6">
          {remarks.map((paragraph) => (
            <P key={paragraph}>{paragraph}</P>
          ))}
        </div>
      </VerticalMarginsLayout>

      {sections.map((section) => (
        <ContentCardBackgroundLayout key={section.title}>
          <ContentCardSectionView
            {...section}
            listItemComponent={({
              item: { title, subtitle, remarks, href },
            }) => (
              <ContentCardLinkView href={href}>
                <ContentCardItemLayout>
                  <H3>
                    {title}
                    {subtitle && (
                      <span className={COLORS.route}> ({subtitle})</span>
                    )}
                  </H3>
                  {remarks.map((paragraph) => (
                    <ContentCardParagraphView key={paragraph}>
                      {paragraph}
                    </ContentCardParagraphView>
                  ))}
                </ContentCardItemLayout>
              </ContentCardLinkView>
            )}
          />
        </ContentCardBackgroundLayout>
      ))}
    </ContentLayout>
  );
};

export default AboutPage;
