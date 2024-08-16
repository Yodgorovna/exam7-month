import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
export const useCategoryList = () => {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
