import { type m } from "framer-motion";

export type MotionVariants<T extends keyof typeof m> = Parameters<
  typeof m[T]
>[0]["variants"];

export type MotionVariantRecord<T extends keyof typeof m> = Record<
  string,
  MotionVariants<T>
>;
