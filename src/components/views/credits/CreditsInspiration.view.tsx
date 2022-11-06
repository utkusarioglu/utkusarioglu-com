import { type FC } from "react";
import P from "_primitives/paragraph/P.primitive";
import H2 from "_primitives/headings/H2.primitive";
import { type CreditsInspiration } from "_types/credits.types";

type CreditsInspirationViewProps = CreditsInspiration;

const CreditsInspirationView: FC<CreditsInspirationViewProps> = ({
  title,
  remarks,
}) => (
  <div className="px-5 mb-10">
    <H2>{title}</H2>
    {remarks.map((paragraph) => (
      <P key={paragraph}>{paragraph}</P>
    ))}
  </div>
);

export default CreditsInspirationView;
