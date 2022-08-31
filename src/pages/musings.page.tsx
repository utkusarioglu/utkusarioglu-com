import { type FC } from "react";
import ContentLayout from "_layouts/content/Content.layout";
import EnhancedImage from "_primitives/enhanced-image/EnhancedImage.primitive";
import Paragraph from "_primitives/paragraph/Paragraph.primitive";
import { readFileSync } from "fs";
import { parse } from "yaml";
import { COLORS, MAX_W_PROSE } from "_constants";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ResumeScreenH3View from "_views/resume-screen/ResumeScreenH3.view";
import VerticalMarginsLayout from "_layouts/vertical-margins/VerticalMargins.layout";
import ResumeScreenSectionView from "_views/resume-screen/ResumeScreenSection.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import ContentCardParagraphView from "_views/content-card/ContentCardParagraph.view";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import { type Section } from "_types/resume.types";

interface MusingsListItem {
  title: string;
  href: string; // url
  remarks: string[];
}

interface MusingsPageProps {
  musings: {
    remarks: string[];
    sections: Section<MusingsListItem>[];
  };
}

export function getStaticProps() {
  const musings = parse(
    readFileSync("assets/musings.yml", { encoding: "UTF-8" })
  ) as any;

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
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </div>
      </VerticalMarginsLayout>

      {sections.map((section) => (
        <ContentCardBackgroundLayout key={section.title}>
          <ResumeScreenSectionView
            {...section}
            listItemComponent={({
              item: { title, subtitle, remarks, href },
            }) => (
              <ContentCardLinkView href={href}>
                <ContentCardItemLayout>
                  <ResumeScreenH3View>
                    {title}
                    {subtitle && (
                      <span className={COLORS.secondaryText}>
                        {" "}
                        ({subtitle})
                      </span>
                    )}
                  </ResumeScreenH3View>
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
