import { createDebtor, getDebtors } from "@/api/debtor-api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useGetDebtors = () => {
  return useQuery({
    queryKey: ["debtors"],
    queryFn: getDebtors,
  });
};

export const useCreateDebtor = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["createDebtor"],
    mutationFn: createDebtor,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["debtors"],
      });
    },
  });
};
