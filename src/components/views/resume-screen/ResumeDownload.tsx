import ResumeSection from "_views/resume-screen/ResumeSection";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { COLORS } from "_constants";
import NonRoutedLink from "_primitives/non-routed-link/NonRoutedLink";
import ResumeH3 from "./ResumeH3";

const ResumeDownload = () => (
  <ContentCardBackgroundLayout>
    <ResumeSection
      title="Download Resume"
      list={[
        {
          title: "Letter",
          remarks: "North American standard",
          folder: "letter",
        },
        {
          title: "A4",
          remarks: "Standard format for Europe and the rest of the world",
          folder: "a4",
        },
      ]}
      listItemComponent={({ item: { title, folder, remarks } }) => (
        <NonRoutedLink
          href={`/_next/static/resume/${folder}/utku-sarioglu-resume.pdf`}
        >
          <ContentCardItemLayout>
            <ResumeH3 className={COLORS.paragraph}>{title}</ResumeH3>
            <div className={COLORS.paragraph}>{remarks}</div>
          </ContentCardItemLayout>
        </NonRoutedLink>
      )}
    />
  </ContentCardBackgroundLayout>
);

export default ResumeDownload;
