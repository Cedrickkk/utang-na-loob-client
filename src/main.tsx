import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@tanstack/react-query";
import type { ApiError } from "@/schema/response";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: {
    queryClient,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

declare module "@tanstack/react-query" {
  interface Register {
    defaultError: ApiError;
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
);
