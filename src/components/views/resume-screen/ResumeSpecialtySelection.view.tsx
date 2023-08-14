import { type FC, type Dispatch, type SetStateAction } from "react";
import { type SpecialtyId } from "_types/resume.types";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardButtonView from "_views/content-card/ContentCardButton.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import H3 from "_primitives/headings/H3.primitive";
// import H2 from "_primitives/headings/H2.primitive";
import c from "classnames";
import { COLORS } from "_config";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";

type ResumeSpecialtiesViewProps = SpecialtyReaderProps & {
  setCurrentSpecialty: Dispatch<SetStateAction<SpecialtyId>>;
};

const ResumeSpecialtySelectionView: FC<ResumeSpecialtiesViewProps> = ({
  activeSpecialtyId,
  setCurrentSpecialty,
  specialties,
}) => {
  return (
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        title="Specialty Selection"
        subtitle=""
        list={specialties}
        keyFunction={(item) => item.title}
        filterFunction={() => true}
        listItemComponent={({ item: { title, remarks, id } }) => {
          const isActive = activeSpecialtyId === id;
          return (
            <ContentCardButtonView
              isActive={isActive}
              onClick={() => {
                setCurrentSpecialty(id);
              }}
            >
              <ContentCardItemLayout>
                <div className="flex flex-row gap-5">
                  {isActive ? (
                    <div className="flex items-center">
                      <div
                        className={c(
                          COLORS.page,
                          "text-4xl font-bold font-heading"
                        )}
                      >
                        ✔
                      </div>
                    </div>
                  ) : null}
                  <div className="flex-grow">
                    <H3>{title}</H3>
                    <div className={COLORS.paragraph}>{remarks}</div>
                  </div>
                </div>
              </ContentCardItemLayout>
            </ContentCardButtonView>
          );
        }}
      />
    </ContentCardBackgroundLayout>
  );
};

export default ResumeSpecialtySelectionView;
