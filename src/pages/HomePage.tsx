import SelectCity from "@/components/SelectCity";
import { City } from "@/types";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleValueChange = (selectedCity: City) => {
    sessionStorage.setItem("city", selectedCity)
    navigate({
      pathname: `/search/${selectedCity}`,
    });
  };

  return (
    <div className="flex flex-col items-center gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md md:px-32">
      <h1 className="text-5xl font-bold tracking-tight text-green-800">
        Tuck into a takeaway today
      </h1>
      <span className="text-xl">Food is just a click away!</span>
      <SelectCity onSelect={handleValueChange} />
    </div>
  );
};

export default HomePage;
