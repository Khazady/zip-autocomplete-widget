import widgetStyles from "@/components/FloatingZipWidget/FloatingZipWidget.module.css";
import {dictionary} from "@/lib/dictionary";
import {useScrollTrigger} from "@/lib/hooks/useScrollTrigger";
import {cn} from "@/lib/utils/cn";
import "@/styles/global.css";
import styles from "@/styles/App.module.css";
import {lazy, Suspense, useState} from "react";

const FloatingZipWidget = lazy(() => import("@/components/FloatingZipWidget"));

const App = () => {
  const shouldMountWidget = useScrollTrigger(0.9);
  const [hasSelectedZip, setHasSelectedZip] = useState(false);

  const handleSelect = (zip: string) => {
    console.log(zip);
    setHasSelectedZip(true);
  };

  return (
    <>
      <div className={styles.scrollPage}>
        <p>{dictionary.app.scrollHint}</p>
      </div>

      {shouldMountWidget && !hasSelectedZip && (
        <Suspense
          fallback={
            <div className={cn(styles.widgetFallback, widgetStyles.widgetPill, widgetStyles.widgetPosition)}>
              {dictionary.app.fallbackLoading}
            </div>
          }
        >
          <FloatingZipWidget onSelect={handleSelect} />
        </Suspense>
      )}
    </>
  );
};

export default App;
