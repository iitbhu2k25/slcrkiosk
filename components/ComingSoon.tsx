"use client";

import React from "react";
import { motion } from "framer-motion";

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-3xl md:text-5xl font-bold text-blue-600"
      >
        Will Be Updated Soon!
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="text-lg md:text-xl text-gray-700 mt-3"
      >
        Stay tuned for exciting updates. We’re working hard to bring new content.
      </motion.p>
    </div>
  );
};

export default ComingSoon;
