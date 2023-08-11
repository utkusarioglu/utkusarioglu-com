import { type FC } from "react";
import { type SpecialtyId, type Specialties } from "_types/resume.types";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { COLORS } from "_config";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import H3 from "_primitives/headings/H3.primitive";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";

const RESUME_LIST = [
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
];

type ResumeScreenDownloadViewProps = SpecialtyReaderProps;

const ResumeScreenDownloadView: FC<ResumeScreenDownloadViewProps> = ({
  specialties,
  activeSpecialtyId,
}) => {
  const subtitle = specialties.filter(({ id }) => id === activeSpecialtyId)[0]
    .title;
  return (
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        title="Download Resume"
        subtitle={subtitle}
        list={RESUME_LIST}
        listItemComponent={({ item: { title, folder, remarks } }) => (
          <ContentCardLinkView
            href={`/_next/static/resume/${folder}/utku-sarioglu-resume.pdf`}
          >
            <ContentCardItemLayout>
              <H3>{title}</H3>
              <div className={COLORS.paragraph}>{remarks}</div>
            </ContentCardItemLayout>
          </ContentCardLinkView>
        )}
      />
    </ContentCardBackgroundLayout>
  );
};

export default ResumeScreenDownloadView;
