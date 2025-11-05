import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import type { QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { Toaster } from "sonner";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="h-full w-full">
      <div className="bg-muted before:bg-primary relative flex min-h-dvh w-full before:fixed before:inset-x-0 before:top-0 before:h-72">
        <SidebarProvider>
          <AppSidebar variant="floating" className="m-6" />
          <SidebarInset className="bg-transparent">
            <div className="z-1 flex flex-1 flex-col py-6">
              <header className="text-primary-foreground">
                <div className="flex items-center gap-4 px-12 pt-2.5">
                  <SidebarTrigger className="text-primary cursor-pointer bg-white" />
                  <div className="hidden sm:flex sm:flex-col sm:items-start">
                    <p className="text-lg font-semibold">Hey, Jennielyn</p>
                    <p className="text-primary-foreground/50 md:max-lg:hidden">
                      Welcome back!
                    </p>
                  </div>
                </div>
              </header>
              <main className="mx-auto size-full flex-1 px-12 py-6 sm:px-6">
                <Outlet />
              </main>
              <Toaster />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
