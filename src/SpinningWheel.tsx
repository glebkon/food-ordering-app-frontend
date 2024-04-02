import { Loader2 } from "lucide-react";

const SpinningWheel = () => {
  const Icon = {
    spinner: Loader2,
  };

  return (
    <div className="flex items-center justify-center">
      <Icon.spinner className="w-12 h-12 my-48 text-green-600 animate-spin" />
    </div>
  );
};

export default SpinningWheel;
