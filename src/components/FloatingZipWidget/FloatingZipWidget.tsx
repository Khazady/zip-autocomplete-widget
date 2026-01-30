import CalendarIcon from "@/assets/Calendar.svg?react";
import CrossIcon from "@/assets/Cross.svg?react";
import styles from "@/components/FloatingZipWidget/FloatingZipWidget.module.css";
import Spinner from "@/components/ui/Spinner";
import {useZipSearch} from "@/lib/api/zip/useZipSearch";
import {dictionary} from "@/lib/dictionary";
import {cn} from "@/lib/utils/cn";
import {useState} from "react";

type FloatingZipWidgetProps = {
  onSelect: (zip: string) => void;
};

export const FloatingZipWidget = ({ onSelect }: FloatingZipWidgetProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const { results, isLoading, error } = useZipSearch(isOpen, query);

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
  };

  const hasQuery = query.trim().length > 0;
  const showLoading = hasQuery && isLoading;
  const showError = hasQuery && Boolean(error);
  const showEmpty = hasQuery && !isLoading && !error && results.length === 0;

  return (
    <div className={cn(styles.floatingWidget, styles.widgetPosition)}>
      {!isOpen && (
        <button
          className={cn(styles.widgetPill, styles.widgetLauncher)}
          onClick={() => setIsOpen(true)}
        >
          <span>{dictionary.widget.launcher}</span>
          <CalendarIcon width={24} height={24} />
        </button>
      )}

      {isOpen && (
        <div className={styles.widgetPanel}>
          <button className={styles.widgetClose} onClick={handleClose}>
            <CrossIcon width={16} height={16} />
          </button>
          <span className={styles.widgetHeader}>
            {dictionary.widget.header}
          </span>
          <div className={styles.widgetInputRow}>
            <div className={styles.widgetInputWrapper}>
              <input
                autoFocus
                className={styles.widgetInput}
                placeholder={dictionary.widget.placeholder}
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
              {showLoading && <Spinner className={styles.inputSpinner} />}

              {hasQuery && (
                <div className={styles.widgetResults}>
                  {showEmpty && (
                    <div className={styles.widgetEmpty}>
                      <p>{dictionary.widget.empty}</p>
                    </div>
                  )}

                  {showError && (
                    <div className={styles.widgetEmpty}>
                      <p>{dictionary.widget.error}</p>
                    </div>
                  )}

                  {results.length > 0 && (
                    <ul className={styles.widgetList}>
                      {results.map((result) => (
                        <li key={result.id} className={styles.widgetItem}>
                          <button
                            onClick={() => onSelect(result.zip)}
                            className={styles.widgetItemButton}
                          >
                            <span>{result.label}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
            <button className={styles.widgetButton}>
              {dictionary.widget.buttonLabel}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
