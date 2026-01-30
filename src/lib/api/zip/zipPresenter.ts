import type {ZipApiRecord, ZipUiItem} from "@/lib/api/zip/zipTypes";
import {normalizeText} from "@/lib/utils/normalizeText";

export const mapZipToUi = (records: ZipApiRecord[], query: string): ZipUiItem[] => {
  const normalized = normalizeText(query);
  if (!normalized) return []

  const matches = records.filter((record) => {
    const zipMatch = record.zip.startsWith(normalized);
    const cityMatch = record.city.toLowerCase().includes(normalized);
    return zipMatch || cityMatch;
  });

  return matches.slice(0, 6).map((record, index) => ({
    ...record,
    id: `${record.zip}-${record.city}-${index}`,
    label: record.hideCityName ? record.zip : `${record.zip} ${record.city}`,
  }));
};
