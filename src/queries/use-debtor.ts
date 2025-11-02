import { createDebtor, getDebtorById, getDebtors } from "@/api/debtor-api";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const debtorQueries = {
  all: () => ["debtors"] as const,
  lists: () => [...debtorQueries.all(), "list"] as const,
  list: () => {
    return queryOptions({
      queryKey: [...debtorQueries.lists()],
      queryFn: getDebtors,
      staleTime: 5 * 60 * 1000,
    });
  },
  details: () => [...debtorQueries.all(), "detail"],
  detail: (id: number) => {
    return queryOptions({
      queryKey: [...debtorQueries.details()],
      queryFn: () => getDebtorById(id),
      staleTime: 5 * 60 * 1000,
    });
  },
};

export const useGetDebtors = () => {
  return useQuery(debtorQueries.list());
};

export const useGetDebtorById = (id: number) => {
  return useQuery(debtorQueries.detail(id));
};

export const useCreateDebtor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createDebtor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: debtorQueries.lists(),
      });
    },
  });
};
