import {useCallback, useEffect, useRef, useState} from "react";

type UseExitAnimation = {
  isExiting: boolean;
  isExited: boolean;
  exit: () => void;
};

export const useExitAnimation = (durationMs: number): UseExitAnimation => {
  const [isExiting, setIsExiting] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const exit = useCallback(() => {
    if (isExited || isExiting) {
      return;
    }
    setIsExiting(true);
    timeoutRef.current = window.setTimeout(() => {
      setIsExited(true);
    }, durationMs);
  }, [durationMs, isExited, isExiting]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current !== null) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    isExiting,
    isExited,
    exit,
  };
};
