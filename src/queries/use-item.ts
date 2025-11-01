import { createItem, getItemById, getItems } from "@/api/item-api";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
export const itemQueries = {
  all: () => ["items"] as const,
  lists: () => [...itemQueries.all(), "list"] as const,
  list: (filters: string) => {
    return queryOptions({
      queryKey: [...itemQueries.lists(), filters],
      queryFn: getItems,
      staleTime: 5000,
    });
  },
  details: () => [...itemQueries.all(), "detail"] as const,
  detail: (id: number) =>
    queryOptions({
      queryKey: [...itemQueries.details(), id],
      queryFn: () => getItemById(id),
      staleTime: 5000,
      enabled: !!id,
    }),
};

export const getItemsQueryOptions = itemQueries.list("");

export const useGetItems = () => {
  return useQuery(getItemsQueryOptions);
};

export const useGetItemById = (id: number) => {
  return useQuery(itemQueries.detail(id));
};

export const useCreateItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createItem,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: itemQueries.all(),
      }),
  });
};
