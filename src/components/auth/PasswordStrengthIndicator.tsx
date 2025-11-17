"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

type PasswordRequirements = {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
};

type Props = {
  password: string;
  requirements: PasswordRequirements;
};

const requirementsList = [
  { key: 'length' as const, label: '8+ characters' },
  { key: 'uppercase' as const, label: 'Uppercase' },
  { key: 'lowercase' as const, label: 'Lowercase' },
  { key: 'number' as const, label: 'Number' }
];

export function PasswordStrengthIndicator({ password, requirements }: Props) {
  if (!password) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      className="mt-3 p-3 bg-bg-secondary rounded-lg space-y-2"
    >
      <p className="text-xs font-medium text-text-secondary mb-2">Password must contain:</p>
      <div className="grid grid-cols-2 gap-2">
        {requirementsList.map(({ key, label }) => {
          const met = requirements[key];
          return (
            <div key={key} className={`flex items-center gap-2 text-xs ${met ? 'text-status-success-text' : 'text-text-muted'}`}>
              <div className={`w-4 h-4 rounded-full flex items-center justify-center ${met ? 'bg-status-success-icon' : 'bg-bg-tertiary'}`}>
                {met && <Check className="h-3 w-3 text-white" />}
              </div>
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

