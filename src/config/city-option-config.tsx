import { City } from "@/types";

type CityInfo = {
  label: string;
  value: City;
};

export const CITIES: CityInfo[] = [
  { label: "Dnipro", value: "Dnipro" },
  { label: "Kyiv", value: "Kyiv" },
  { label: "Odesa", value: "Odesa" },
];
