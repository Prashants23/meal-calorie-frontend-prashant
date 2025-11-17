"use client";

import { motion } from "framer-motion";
import { User as UserIcon } from "lucide-react";

export function RegisterHeader() {
  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.1, stiffness: 200 }}
        className="flex justify-center mb-6"
      >
        <div className="w-16 h-16 rounded-2xl bg-bg-secondary shadow-lg flex items-center justify-center border border-ui-border">
          <UserIcon className="h-7 w-7 text-text-primary" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-semibold text-text-primary mb-2">
          Create your account
        </h1>
        <p className="text-text-secondary text-sm">
          Start tracking your calories and reach
          <br />
          your health goals. For free
        </p>
      </motion.div>
    </>
  );
}

