import { useFormik } from "formik";

export interface InputProps {
  formik: ReturnType<typeof useFormik>;
  name: string;
  type: string;
  unit: string;
  min: number | string;
  max: number | string;
}
