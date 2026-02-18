export type ColorStatus =
  | "completed"
  | "deliveried"
  | "cancelled"
  | "pending"
  | "processing"
  | "selling"
  |"soldout"
  | "new";

const appliedColor: Record<ColorStatus, string> = {
  deliveried: "bg-green-200 text-green-600",
  completed: "bg-green-200 text-green-600",
  pending: "bg-blue-200 text-blue-600",
  processing: "bg-purple-200 text-purple-600",
  new: "bg-orange-200 text-orange-600",
  cancelled: "bg-red-200 text-red-600",
  selling:"bg-blue-200 text-blue-600",
  soldout:"bg-green-200 text-green-600"
};
export const useColorStatus = () => {
  const getStyle = (status: string) => {
    if (!status) return "bg-gray-200 text-gray-700";
    return (
      appliedColor[status?.toLowerCase() as ColorStatus] ||
      "bg-gray-200 text-gray-700"
    );
  };
  return { getStyle };
};
