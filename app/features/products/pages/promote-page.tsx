import type { Route } from './+types/promote-page';

interface Props extends Route.ComponentProps {}

export function meta() {
  return [
    { title: 'Promote Product - weMake' },
    { name: 'description', content: 'Promote your product' },
  ];
}

export function loader({}: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export default function PromotePage({}: Props) {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold">Promote Your Product</h1>
    </div>
  );
}
