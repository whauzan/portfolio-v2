import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircle({}: Props) {
  return (
    <motion.div
      className="relative flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
    >
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[200px] w-[200px] animate-ping" />
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[300px] w-[300px]" />
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[500px] w-[500px]" />
      <div className="absolute border border-[#ED1C24] rounded-full mt-52 h-[600px] w-[600px] opacity-20 animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[800px] w-[800px]" />
    </motion.div>
  );
}
