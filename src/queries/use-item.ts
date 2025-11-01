import { createItem, getItemById, getItems } from "@/api/item-api";
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

export const useGetItemById = (id: number) => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => getItemById(id),
    enabled: !!id,
  });
};
