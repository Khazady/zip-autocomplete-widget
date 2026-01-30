import {dictionary} from "@/lib/dictionary";
import {useScrollTrigger} from "@/lib/hooks/useScrollTrigger";
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
            <div className={styles.widgetFallback}>{dictionary.app.fallbackLoading}</div>
          }
        >
          <FloatingZipWidget onSelect={handleSelect} />
        </Suspense>
      )}
    </>
  );
};

export default App;
