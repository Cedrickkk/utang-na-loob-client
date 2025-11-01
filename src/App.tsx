import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { useForm } from "@tanstack/react-form";
import { itemSchema } from "@/schema/item";
import { useCreateItem, useGetItems } from "@/queries/use-item";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { debtorSchema, type CreateDebtor } from "@/schema/debtor";
import { useCreateDebtor, useGetDebtors } from "@/queries/use-debtor";

export default function App() {
  const { data: items } = useGetItems();
  const { data: debtors } = useGetDebtors();
  const { mutate: createItem } = useCreateItem();
  const { mutate: createDebtor } = useCreateDebtor();

  const createItemForm = useForm({
    defaultValues: {
      name: "",
      price: 0,
    },
    validators: {
      onSubmit: itemSchema,
    },
    onSubmit: ({ value }) => {
      createItem(value);
      createItemForm.reset();
    },
  });

  const debtorDefaultValues: CreateDebtor = {
    name: "",
    email: "",
    contactNumber: "",
    address: {
      city: "",
      street: "",
      houseNumber: "",
    },
  };

  const createDebtorForm = useForm({
    defaultValues: {
      ...debtorDefaultValues,
    },
    validators: {
      onSubmit: debtorSchema,
    },
    onSubmit: ({ value }) => {
      createDebtor(value);
    },
  });

  return (
    <div className="container mx-auto my-9 max-w-4xl space-y-4">
      {debtors?.data?.map((debtor) => {
        return <p key={debtor.id}>{debtor.name}</p>;
      })}

      <div className="mb-4 grid grid-cols-3 gap-2">
        {items?.data?.map((item) => {
          return (
            <div
              key={item.id}
              className="relative max-w-md rounded-xl bg-linear-to-r from-neutral-600 to-violet-300 pt-0 shadow-lg"
            >
              <Card className="rounded-xs border-none">
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                </CardHeader>
                <CardFooter className="justify-between gap-3 max-sm:flex-col max-sm:items-stretch">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium uppercase">Price</span>
                    <span className="text-xl font-semibold">₱69.99</span>
                  </div>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Create Item</CardTitle>
          <CardDescription>Create a new item in your inventory</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="create-item-form"
            onSubmit={(e) => {
              e.preventDefault();
              createItemForm.handleSubmit();
            }}
          >
            <FieldGroup>
              <createItemForm.Field
                name="name"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter item name"
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />
              <createItemForm.Field
                name="price"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Price</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        type="number"
                        onChange={(e) =>
                          field.handleChange(Number(e.target.value))
                        }
                        placeholder="₱0"
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => createItemForm.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="create-item-form">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create Debtor</CardTitle>
          <CardDescription>Create a new debtor</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            id="create-debtor-form"
            onSubmit={(e) => {
              e.preventDefault();
              createDebtorForm.handleSubmit();
            }}
          >
            <FieldGroup>
              <createDebtorForm.Field
                name="name"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter debtor name"
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />

              <createDebtorForm.Field
                name="email"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Enter email"
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />

              <createDebtorForm.Field
                name="address.houseNumber"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>House number</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />

              <createDebtorForm.Field
                name="address.street"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Street</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />

              <createDebtorForm.Field
                name="address.city"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>City</FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />

              <createDebtorForm.Field
                name="contactNumber"
                children={(field) => {
                  return (
                    <Field>
                      <FieldLabel htmlFor={field.name}>
                        Contact Number
                      </FieldLabel>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        autoComplete="off"
                      />
                      <FieldError errors={field.state.meta.errors} />
                    </Field>
                  );
                }}
              />
            </FieldGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Field orientation="horizontal">
            <Button
              type="button"
              variant="outline"
              onClick={() => createDebtorForm.reset()}
            >
              Reset
            </Button>
            <Button type="submit" form="create-debtor-form">
              Submit
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </div>
  );
}
