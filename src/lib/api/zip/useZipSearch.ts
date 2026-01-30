import { getZipCodes } from "@/lib/api/zip/zipApi";
import { mapZipToUi } from "@/lib/api/zip/zipPresenter";
import type { ZipApiRecord, ZipUiItem } from "@/lib/api/zip/zipTypes";
import useSWR from "swr";

type UseZipSearch = {
  results: ZipUiItem[];
  isLoading: boolean;
  error: unknown;
};

export const useZipSearch = (
  isEnabled: boolean,
  query: string,
): UseZipSearch => {
  const {
    data = [],
    isLoading,
    error,
  } = useSWR<ZipApiRecord[]>(isEnabled ? "zip-data" : null, getZipCodes);
  const results = mapZipToUi(data, query);

  return {
    results,
    isLoading,
    error,
  };
};
