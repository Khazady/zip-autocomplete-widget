import { useEffect, useEffectEvent } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutside: () => void,
  isEnabled = true,
): void => {
  const handleOutside = useEffectEvent((event: PointerEvent) => {
    const root = ref.current;
    if (!root) {
      return;
    }
    if (event.target instanceof Node && !root.contains(event.target)) {
      onOutside();
    }
  });

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    document.addEventListener("pointerdown", handleOutside);

    return () => {
      document.removeEventListener("pointerdown", handleOutside);
    };
  }, [handleOutside, isEnabled]);
};
