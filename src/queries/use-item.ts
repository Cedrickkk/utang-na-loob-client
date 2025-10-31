import { createItem, getItems } from "@/api/item-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createItem"],
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
  });
};
