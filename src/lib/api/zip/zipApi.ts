import type {ZipApiRecord} from "@/lib/api/zip/zipTypes";

const DATA_URL = `${import.meta.env.BASE_URL}mocked-data.json`;

export const getZipCodes = async (): Promise<ZipApiRecord[]> => {
  await new Promise((resolve) => {
    setTimeout(resolve, 600);
  });
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch zip data");
  }

  return (await response.json()) as ZipApiRecord[];
};
