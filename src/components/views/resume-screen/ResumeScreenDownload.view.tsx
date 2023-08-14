import { Dispatch, SetStateAction, type FC } from "react";
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
    // folder: "letter",
    paperFormatShortCode: "l",
  },
  {
    title: "A4",
    remarks: "Standard format for Europe and the rest of the world",
    // folder: "a4",
    paperFormatShortCode: "4",
  },
];

type ResumeScreenDownloadViewProps = SpecialtyReaderProps & {
  setIncludePhoto: Dispatch<SetStateAction<boolean>>;
  includePhoto: boolean;
};

const ResumeScreenDownloadView: FC<ResumeScreenDownloadViewProps> = ({
  specialties,
  activeSpecialtyId,
  includePhoto,
  setIncludePhoto,
}) => {
  const subtitle = specialties.filter(({ id }) => id === activeSpecialtyId)[0]
    .title;
  return (
    <ContentCardBackgroundLayout>
      <input
        type="checkbox"
        value="true"
        onChange={(e) => setIncludePhoto(e.target.value === "true")}
      />
      <ContentCardSectionView
        title="Download Resume"
        subtitle={subtitle}
        list={RESUME_LIST}
        keyFunction={(item) => item.title}
        filterFunction={() => true}
        listItemComponent={({
          item: { title, paperFormatShortCode, remarks },
        }) => {
          const resumeCode = [
            activeSpecialtyId,
            includePhoto ? "p" : "n",
            paperFormatShortCode,
          ].join("");
          return (
            <ContentCardLinkView
              href={`/_next/static/resume/utku-sarioglu-resume-${resumeCode}.pdf`}
            >
              <ContentCardItemLayout>
                <H3>{title}</H3>
                <div className={COLORS.paragraph}>{remarks}</div>
              </ContentCardItemLayout>
            </ContentCardLinkView>
          );
        }}
      />
    </ContentCardBackgroundLayout>
  );
};

export default ResumeScreenDownloadView;
