import widgetStyles from "@/components/FloatingZipWidget/FloatingZipWidget.module.css";
import { dictionary } from "@/lib/dictionary";
import { useExitAnimation } from "@/lib/hooks/useExitAnimation";
import { useScrollTrigger } from "@/lib/hooks/useScrollTrigger";
import { cn } from "@/lib/utils/cn";
import "@/styles/global.css";
import styles from "@/styles/App.module.css";
import { lazy, Suspense } from "react";

const FloatingZipWidget = lazy(() => import("@/components/FloatingZipWidget"));

const App = () => {
  const shouldMountWidget = useScrollTrigger(0.9);
  const { isExited, isExiting, exit } = useExitAnimation(180);

  const handleSelect = (zip: string) => {
    if (isExited || isExiting) return;
    console.log(zip);
    exit();
  };

  const handleExit = () => {
    if (isExited || isExiting) return;
    exit();
  };

  return (
    <>
      <div className={styles.scrollPage}>
        <p>{dictionary.app.scrollHint}</p>
      </div>

      {shouldMountWidget && !isExited && (
        <Suspense
          fallback={
            <div
              className={cn(
                styles.widgetFallback,
                widgetStyles.widgetPill,
                widgetStyles.widgetPosition,
              )}
            >
              {dictionary.app.fallbackLoading}
            </div>
          }
        >
          <FloatingZipWidget
            onSelect={handleSelect}
            onExit={handleExit}
            isDismissing={isExiting}
          />
        </Suspense>
      )}
    </>
  );
};

export default App;
