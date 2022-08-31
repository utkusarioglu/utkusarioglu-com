import ResumeScreenSectionView from "_views/resume-screen/ResumeScreenSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { COLORS } from "_constants";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import ResumeScreenH3View from "./ResumeScreenH3.view";

const ResumeScreenDownloadView = () => (
  <ContentCardBackgroundLayout>
    <ResumeScreenSectionView
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
        <ContentCardLinkView
          href={`/_next/static/resume/${folder}/utku-sarioglu-resume.pdf`}
        >
          <ContentCardItemLayout>
            <ResumeScreenH3View className={COLORS.paragraph}>
              {title}
            </ResumeScreenH3View>
            <div className={COLORS.paragraph}>{remarks}</div>
          </ContentCardItemLayout>
        </ContentCardLinkView>
      )}
    />
  </ContentCardBackgroundLayout>
);

export default ResumeScreenDownloadView;
