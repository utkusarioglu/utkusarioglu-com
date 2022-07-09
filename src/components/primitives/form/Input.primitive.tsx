import { type FC } from "react";
import { COLORS } from "_constants";
import { type InputProps } from "./Input.primitive.types";

const Input: FC<InputProps> = ({ name, type, formik, unit, min, max }) => {
  return (
    <div
      className={`${COLORS.canvasControlInput} py-2 px-3 relative flex flex-row items-center grow rounded-md`}
    >
      <input
        name={name}
        type={type}
        onChange={formik.handleChange}
        className={` ${COLORS.paragraph} grow bg-transparent focus:outline-none`}
        value={formik.values[name]}
        min={min}
        max={max}
      />
      {unit !== "" && (
        <div className="ml-3">
          {type === "range" && (
            <span className={COLORS.paragraph}>{formik.values[name]}</span>
          )}
          <span className={[COLORS.paragraph, "pointer-events-none"].join(" ")}>
            {unit}
          </span>
        </div>
      )}
    </div>
  );
};

export default Input;
