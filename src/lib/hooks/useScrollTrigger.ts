import { useEffect, useState } from "react";

export const useScrollTrigger = (triggerRatio: number): boolean => {
  const [isTriggered, setIsTriggered] = useState(false);

  useEffect(() => {
    if (isTriggered) {
      return;
    }

    const update = () => {
      const triggerPoint = window.innerHeight * triggerRatio;
      if (window.scrollY >= triggerPoint) {
        setIsTriggered(true);
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [isTriggered, triggerRatio]);

  return isTriggered;
};
