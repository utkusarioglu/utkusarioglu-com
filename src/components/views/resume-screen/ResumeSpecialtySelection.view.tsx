import { type FC, type Dispatch, type SetStateAction } from "react";
import { type Specialties, type SpecialtyId } from "_types/resume.types";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardButtonView from "_views/content-card/ContentCardButton.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import H3 from "_primitives/headings/H3.primitive";
import H2 from "_primitives/headings/H2.primitive";
import { COLORS } from "_config";
import { type SpecialtyReaderProps } from "_layouts/resume/Resume.layout";

type ResumeSpecialtiesViewProps = SpecialtyReaderProps & {
  setCurrentSpecialty: Dispatch<SetStateAction<SpecialtyId>>;
};

const ResumeSpecialtiesView: FC<ResumeSpecialtiesViewProps> = ({
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
        listItemComponent={({ item: { title, remarks, id } }) => (
          <ContentCardButtonView
            onClick={() => {
              setCurrentSpecialty(id);
            }}
          >
            <ContentCardItemLayout>
              <div className="flex flex-row gap-5">
                {activeSpecialtyId === id ? <H2>A</H2> : null}
                <div className="flex-grow">
                  <H3>{title}</H3>
                  <div className={COLORS.paragraph}>{remarks}</div>
                </div>
              </div>
            </ContentCardItemLayout>
          </ContentCardButtonView>
        )}
      />
    </ContentCardBackgroundLayout>
  );
};

export default ResumeSpecialtiesView;
