import { createDebt, getDebtById, getDebts } from "@/api/debt-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetDebts = () => {
  return useQuery({
    queryKey: ["debts"],
    queryFn: getDebts,
  });
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

export const useGetDebtById = (id: number) => {
  return useQuery({
    queryKey: ["item", id],
    queryFn: () => getDebtById(id),
    enabled: !!id,
  });
};
