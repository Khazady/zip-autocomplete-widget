import type {ZipApiRecord} from "@/lib/api/zip/zipTypes";

const DATA_URL = `${import.meta.env.BASE_URL}mocked-data.json`;
const SHOULD_DELAY = true;

export const getZipCodes = async (): Promise<ZipApiRecord[]> => {
  if (SHOULD_DELAY) {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch zip data");
  }

  return (await response.json()) as ZipApiRecord[];
};
