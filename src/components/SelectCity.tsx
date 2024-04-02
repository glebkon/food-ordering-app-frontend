import { CITIES } from "@/config/city-option-config";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { City } from "@/types";
import { useState } from "react";

type Props = {
  onSelect: (value: City) => void;
};

const SelectCity = ({ onSelect }: Props) => {
  const [value] = useState(sessionStorage.getItem("city") || "");

  return (
    <Select value={value} onValueChange={(value) => onSelect(value as City)}>
      <SelectTrigger className="w-[250px] p-2">
        <SelectValue placeholder="Select a city" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {CITIES.map((city) => (
            <SelectItem value={city.value} key={city.value}>
              {city.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCity;
