export type ZipApiRecord = {
  zip: string;
  city: string;
  hideCityName: boolean;
};

export type ZipUiItem = ZipApiRecord & {
  id: string;
  label: string;
};
