import { type FC } from "react";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { COLORS } from "_config";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import H3 from "_primitives/headings/H3.primitive";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";
import { type ResumeIncludePhotoStateProps } from "_hooks/resume/resume.hooks";
import P from "_primitives/paragraph/P.primitive";

const RESUME_LIST = [
  {
    title: "Letter",
    remarks: "North American standard",
    paperFormatShortCode: "l",
  },
  {
    title: "A4",
    remarks: "Standard format for Europe and the rest of the world",
    paperFormatShortCode: "4",
  },
];

type ResumeScreenDownloadViewProps = SpecialtyReaderProps &
  ResumeIncludePhotoStateProps & {};

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
      <ContentCardSectionView
        title="Download Resume"
        subtitle={subtitle}
        Body={() => (
          <div className="flex flex-row">
            <input
              // TODO this needs work
              className="mr-3 border-blue-500 bg-slate-500"
              type="checkbox"
              checked={includePhoto}
              onChange={(e) => {
                setIncludePhoto(e.target.checked);
              }}
            />
            <P>Include a photo</P>
          </div>
        )}
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
