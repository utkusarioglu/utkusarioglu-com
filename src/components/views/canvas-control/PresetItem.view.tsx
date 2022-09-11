import { MouseEventHandler, type FC, type ReactNode } from "react";
import { useFormik } from "formik";
import { COLORS } from "_config";
import { type PerlinConfig } from "_contexts/canvas/Canvas.context.types";
import c from "classnames";

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
      className={c(
        "p-3 mb-1 rounded-md w-full text-left relative cursor-pointer",
        COLORS.paragraph,
        values.name === name
          ? COLORS.canvasControlInputSelected
          : COLORS.canvasControlInput
      )}
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
