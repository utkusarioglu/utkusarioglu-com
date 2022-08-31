import ResumeSection from "_views/resume/ResumeSection";
import ContentCardBackground from "_views/content-card/ContentCardBackground";
import ContentCardItem from "_views/content-card/ContentCardItem";
import { COLORS } from "_constants";
import NonRoutedLink from "_views/resume/NonRoutedLink";
import ResumeH3 from "_views/resume/ResumeH3";

const ResumeDownload = () => (
  <ContentCardBackground>
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
          <ContentCardItem>
            <ResumeH3 className={COLORS.paragraph}>{title}</ResumeH3>
            <div className={COLORS.paragraph}>{remarks}</div>
          </ContentCardItem>
        </NonRoutedLink>
      )}
    />
  </ContentCardBackground>
);

export default ResumeDownload;
