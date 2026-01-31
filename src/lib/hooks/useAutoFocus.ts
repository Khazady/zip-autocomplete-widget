import { useEffect } from "react";

export const useAutoFocus = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  isEnabled = true,
): void => {
  useEffect(() => {
    if (!isEnabled) {
      return;
    }
    ref.current?.focus();
  }, [isEnabled, ref]);
};
