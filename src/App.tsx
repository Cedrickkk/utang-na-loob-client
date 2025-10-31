import type { FormEvent } from "react";
import { useCreateItem, useGetItems } from "@/queries/use-item";
import { Button } from "@/components/ui/button";
import type { ItemRequest } from "@/types/item";

export default function App() {
  const { data: items } = useGetItems();
  const { mutate, isSuccess } = useCreateItem();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const item: ItemRequest = {
      name: "Argentina Cornbeef",
      price: 50,
    };
    mutate(item);
  };

  return (
    <div>
      {isSuccess && <p>Creation of item is successful.</p>}
      {items &&
        items.data?.map((item) => {
          return (
            <div>
              <p>{item.id}</p>
              <h1>{item.name}</h1>
              <p>{item.price}</p>
              <p>{item.createdAt.toString()}</p>
              <p>{item.updatedAt.toString()}</p>
            </div>
          );
        })}
      <form onSubmit={handleSubmit}>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}
