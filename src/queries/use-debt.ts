import { createDebt, getDebtById, getDebts } from "@/api/debt-api";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const debtQueries = {
  all: () => ["debts"] as const,
  lists: () => [...debtQueries.all(), "list"] as const,
  list: () => {
    return queryOptions({
      queryKey: [...debtQueries.lists()],
      queryFn: getDebts,
      staleTime: 5 * 60 * 1000,
    });
  },
  details: () => [...debtQueries.all(), "detail"],
  detail: (id: number) => {
    return queryOptions({
      queryKey: [...debtQueries.details(), id],
      queryFn: () => getDebtById(id),
      staleTime: 5 * 60 * 1000,
    });
  },
};

export const useGetDebts = () => {
  return useQuery(debtQueries.list());
};

export const useGetDebtById = (id: number) => {
  return useQuery(debtQueries.detail(id));
};

export const useCreateDebt = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createDebt"],
    mutationFn: createDebt,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["debts"],
      });
    },
  });
};
