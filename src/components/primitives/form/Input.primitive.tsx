import { type FC } from "react";
import { COLORS } from "_constants";
import { type InputProps } from "./Input.primitive.types";
import c from "classnames";

const Input: FC<InputProps> = ({
  name,
  type,
  unit,
  min,
  max,
  handleChange,
  values,
}) => {
  return (
    <div
      className={c(
        COLORS.canvasControlInput,
        "py-2 px-3 relative flex flex-row items-center grow rounded-md"
      )}
    >
      <input
        name={name}
        type={type}
        onChange={handleChange}
        className={c(
          COLORS.paragraph,
          "grow bg-transparent focus:outline-none"
        )}
        value={values[name]}
        min={min}
        max={max}
      />
      {unit !== "" && (
        <div className="ml-3 min-w-[40px] text-right">
          {type === "range" && (
            <span className={COLORS.paragraph}>{values[name]}</span>
          )}
          <span className={c(COLORS.paragraph, "pointer-events-none")}>
            {unit}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
