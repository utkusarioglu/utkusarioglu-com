import { MouseEventHandler, type FC, type ReactNode } from "react";
import { useFormik } from "formik";
import { COLORS } from "_constants";
import { type PerlinConfig } from "_contexts/canvas/Canvas.context.types";

type PresetItemViewProps = Pick<
  ReturnType<typeof useFormik>,
  "setValues" | "values" | "submitForm"
> & {
  configCallback: () => PerlinConfig;
  minimize: () => void;
  name: string;
  ControlComponent?: ReactNode;
};

const PresetItemView: FC<PresetItemViewProps> = ({
  setValues,
  submitForm,
  values,
  configCallback,
  name,
  minimize,
  ControlComponent,
}) => {
  const presetOnClick: MouseEventHandler<HTMLDivElement> = (e) => {
    switch (e.detail) {
      case 1:
        setValues(configCallback());
        submitForm();
        break;
      case 2:
        minimize();
        break;
    }
  };

  return (
    <div
      className={[
        "p-3 mb-1 rounded-md w-full text-left relative cursor-pointer",
        COLORS.paragraph,
        values.name === name
          ? COLORS.canvasControlInputSelected
          : COLORS.canvasControlInput,
      ].join(" ")}
      onClick={presetOnClick}
    >
      {name}
      <div className="absolute right-0 top-0 bottom-0 h-full p-3">
        {ControlComponent}
      </div>
    </div>
  );
};

export default PresetItemView;
