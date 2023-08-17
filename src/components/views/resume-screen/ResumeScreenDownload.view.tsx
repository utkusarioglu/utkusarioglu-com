import { type FC } from "react";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { COLORS } from "_config";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import H3 from "_primitives/headings/H3.primitive";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";
import { type ResumeIncludePhotoStateProps } from "_hooks/resume/resume.hooks";
import { Resume } from "_types/resume.types";
import c from "classnames";

type ResumeScreenDownloadViewProps = SpecialtyReaderProps &
  ResumeIncludePhotoStateProps &
  Pick<Resume["variants"], "paperFormats">;

const ResumeScreenDownloadView: FC<ResumeScreenDownloadViewProps> = ({
  paperFormats,
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
              // className="mr-3 border-gray-400"
              id="include-photo"
              className={c(
                "appearance-none",
                "w-5 h-5 mr-3 mt-[2px]",
                "rounded-md",
                "border-2",
                COLORS.checkboxBorder
              )}
              type="checkbox"
              checked={includePhoto}
              onChange={(e) => {
                setIncludePhoto(e.target.checked);
              }}
            />
            <label htmlFor="include-photo" className={COLORS.paragraph}>
              Include a photo
            </label>
          </div>
        )}
        list={paperFormats}
        keyFunction={(item) => item.title}
        filterFunction={() => true}
        listItemComponent={({ item: { title, shortCode, remarks } }) => {
          const resumeCode = [
            activeSpecialtyId,
            includePhoto ? "p" : "n",
            shortCode,
          ].join("");
          return (
            <ContentCardLinkView
              href={[
                "/_next",
                "static",
                "resume",
                `utku-sarioglu-resume-${resumeCode}.pdf`,
              ].join("/")}
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
