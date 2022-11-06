import { type FC } from "react";
import ContentCardLinkView from "_views/content-card/ContentCardLink.view";
import H3 from "_primitives/headings/H3.primitive";
import ContentCardItemLayout from "_layouts/content-card/ContentCardItem.layout";
import { type CreditsSourceCode } from "_types/credits.types";
import { COLORS } from "_config";

type SourceCodeItemViewProps = CreditsSourceCode;

const SourceCodeItemView: FC<SourceCodeItemViewProps> = ({
  title,
  remarks,
  url,
}) => (
  <ContentCardLinkView href={url}>
    <ContentCardItemLayout>
      <H3>{title}</H3>
      <div className={COLORS.paragraph}>{remarks}</div>
    </ContentCardItemLayout>
  </ContentCardLinkView>
);

export default SourceCodeItemView;
