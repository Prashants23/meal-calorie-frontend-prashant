"use client";

import { Lock, Eye, EyeOff, Check, AlertCircle } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  showPassword: boolean;
  onToggleShow: () => void;
  placeholder: string;
  isLoading: boolean;
  confirmValue?: string;
  showMatch?: boolean;
};

export function PasswordInput({ 
  value, 
  onChange, 
  showPassword, 
  onToggleShow, 
  placeholder,
  isLoading,
  confirmValue,
  showMatch = false
}: Props) {
  const passwordsMatch = value && confirmValue && value === confirmValue;
  const showMatchIndicator = showMatch && confirmValue;

  const getBorderClass = () => {
    if (!showMatch) return "border-ui-border focus:ring-brand-secondary focus:border-brand-secondary";
    
    if (confirmValue && !passwordsMatch) {
      return "border-status-error-icon focus:ring-status-error-icon focus:border-status-error-icon";
    }
    if (confirmValue && passwordsMatch) {
      return "border-status-success-icon focus:ring-status-success-icon focus:border-status-success-icon";
    }
    return "border-ui-border focus:ring-brand-secondary focus:border-brand-secondary";
  };

  return (
    <div className="relative">
      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" />
      <input
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`w-full pl-12 pr-12 py-4 bg-bg-secondary border rounded-xl text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 transition-all ${getBorderClass()}`}
        disabled={isLoading}
        autoComplete={showMatch ? "new-password" : "new-password"}
      />
      
      {showMatchIndicator ? (
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          {passwordsMatch ? (
            <Check className="h-5 w-5 text-status-success-icon" />
          ) : (
            <AlertCircle className="h-5 w-5 text-status-error-icon" />
          )}
        </div>
      ) : (
        <button
          type="button"
          onClick={onToggleShow}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors p-1 rounded-md hover:bg-bg-tertiary"
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5" />
          ) : (
            <Eye className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
}

