"use client";
import { motion } from "motion/react";

export const Motion = (props: React.ComponentProps<typeof motion.div>) => {
  return <motion.div {...props} />;
};
