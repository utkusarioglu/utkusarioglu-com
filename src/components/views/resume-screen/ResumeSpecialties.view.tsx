import { type FC, type Dispatch, type SetStateAction } from "react";
import { type Specialties, type SpecialtyId } from "_types/resume.types";
import ContentCardSectionView from "_views/content-card/ContentCardSection.view";
import ContentCardBackgroundLayout from "_layouts/content-card/ContentCardBackground.layout";
import ContentCardButtonView from "_views/content-card/ContentCardButton.view";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import H3 from "_primitives/headings/H3.primitive";
import { COLORS } from "_config";

interface ResumeSpecialtiesViewProps {
  currentSpecialty: SpecialtyId;
  setCurrentSpecialty: Dispatch<SetStateAction<SpecialtyId>>;
  specialties: Specialties;
}

const ResumeSpecialtiesView: FC<ResumeSpecialtiesViewProps> = ({
  currentSpecialty,
  setCurrentSpecialty,
  specialties,
}) => {
  return (
    <ContentCardBackgroundLayout>
      <ContentCardSectionView
        title="Specialty Selection"
        list={specialties}
        listItemComponent={({ item: { title, remarks, id } }) => (
          <ContentCardButtonView
            onClick={() => {
              setCurrentSpecialty(id);
            }}
          >
            <ContentCardItemLayout>
              <H3>
                {title}
                {currentSpecialty === id ? " (active)" : ""}
              </H3>
              <div className={COLORS.paragraph}>{remarks}</div>
            </ContentCardItemLayout>
          </ContentCardButtonView>
        )}
      />
    </ContentCardBackgroundLayout>
  );
};

export default ResumeSpecialtiesView;
