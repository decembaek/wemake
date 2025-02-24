import { z } from 'zod';
import type { Route } from './+types/search-page';
import { data, Form } from 'react-router';
import { Hero } from '~/common/components/hero';
import { ProductCard } from '../components/product-card';
import ProductPagination from '~/common/components/product-pagination';
import { Input } from '~/common/components/ui/input';
import { Button } from '~/common/components/ui/button';

interface Props extends Route.ComponentProps {}

export const meta: Route.MetaFunction = ({ params }) => {
  return [
    {
      title: `Search products | wemake`,
    },
  ];
};

const paramsSchema = z.object({
  query: z.string().optional().default(''),
  page: z.coerce.number().optional().default(1),
});

export function loader({ request }: Route.LoaderArgs) {
  const url = new URL(request.url);
  const { success, data: parsedData } = paramsSchema.safeParse(
    Object.fromEntries(url.searchParams)
  );
  if (!success) {
    throw data(
      { error_code: 'INVALID_PARAMS', message: 'Invalid params' },
      { status: 400 }
    );
  }
  console.log(parsedData);
}

export default function SearchPage({}: Props) {
  return (
    <div className="space-y-20">
      <Hero
        title="Search"
        description="Search for products by title or description"
      />
      <Form className="flex justify-center max-w-screen-sm items-center gap-2 mx-auto">
        <Input
          name="query"
          placeholder="Search for products"
          className="text-lg"
        />
        <Button type="submit">Search</Button>
      </Form>
      <div className="space-y-10 w-full max-w-screen-md mx-auto">
        {Array.from({ length: 11 }).map((_, index) => (
          <ProductCard
            key={index}
            id={`product-${index}`}
            name={`Product ${index}`}
            description={`Product Description ${index}`}
            commentsCount={12}
            viewsCount={12}
            upvotesCount={12}
          />
        ))}
      </div>
      <ProductPagination totalPages={10} />
    </div>
  );
}
