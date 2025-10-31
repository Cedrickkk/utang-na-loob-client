import { useQuery } from "@tanstack/react-query";
import { api } from "@/api";
import type { Item, ApiResponse } from "@/types";

export default function App() {
  const getItems = async () => {
    const { data } = await api.get<ApiResponse<Item>>("/items");
    return data;
  };

  const {
    data: items,
    isPending,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (isPending) {
    return "Fetching data...";
  }

  if (error) {
    return "Something went wrong.";
  }

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      {items.data?.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
}
