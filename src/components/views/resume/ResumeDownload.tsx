import ResumeSection from "_views/resume/ResumeSection";
import ResumeCardBackground from "_views/resume/ResumeCardBackground";
import ResumeCardItem from "_views/resume/ResumeCardItem";
import { COLORS } from "_constants";
import ResumeExternalLink from "_views/resume/ResumeExternalLink";
import ResumeH3 from "_views/resume/ResumeH3";

const ResumeDownload = () => (
  <ResumeCardBackground>
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
        <ResumeExternalLink
          href={`/_next/static/resume/${folder}/utku-sarioglu-resume.pdf`}
        >
          <ResumeCardItem>
            <ResumeH3 className={COLORS.paragraph}>{title}</ResumeH3>
            <div className={COLORS.paragraph}>{remarks}</div>
          </ResumeCardItem>
        </ResumeExternalLink>
      )}
    />
  </ResumeCardBackground>
);

export default ResumeDownload;
