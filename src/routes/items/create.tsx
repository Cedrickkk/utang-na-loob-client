import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/items/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/items/create"!</div>
}
