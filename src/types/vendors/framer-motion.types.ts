import { type motion } from "framer-motion";

export type MotionVariants<T extends keyof typeof motion> = Parameters<
  typeof motion[T]
>[0]["variants"];

export type MotionVariantRecord<T extends keyof typeof motion> = Record<
  string,
  MotionVariants<T>
>;
