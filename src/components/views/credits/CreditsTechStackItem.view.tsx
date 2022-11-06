import { type FC } from "react";
import P from "_primitives/paragraph/P.primitive";
import H3 from "_primitives/headings/H3.primitive";
import { type CreditsTechStackItem } from "_types/credits.types";

type CreditsTechStackItemViewProps = CreditsTechStackItem;

const CreditsTechStackItemView: FC<CreditsTechStackItemViewProps> = ({
  title,
  value,
}) => (
  <div>
    <H3>{title}</H3>
    <P>{value}</P>
  </div>
);

export default CreditsTechStackItemView;
