import { useFormik } from "formik";

export type InputProps = Pick<
  ReturnType<typeof useFormik>,
  "values" | "handleChange"
> & {
  name: string;
  type: string;
  unit: string;
  min: number | string;
  max: number | string;
};
