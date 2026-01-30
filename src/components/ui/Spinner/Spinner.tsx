import styles from "@/components/ui/Spinner/Spinner.module.css";
import { cn } from "@/lib/utils/cn";

type SpinnerProps = {
  className?: string;
};

export const Spinner = ({ className }: SpinnerProps) => {
  return <span className={cn(styles.spinner, className)} />;
};
