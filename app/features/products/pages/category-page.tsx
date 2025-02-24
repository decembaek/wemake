import { ProductCard } from '../components/product-card';
import { Hero } from '~/common/components/hero';
import type { Route } from './+types/category-page';
import ProductPagination from '~/common/components/product-pagination';

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Developer Tools - weMake' },
    {
      name: 'description',
      content: 'Tools for developers to build better products',
    },
  ];
};

export default function CategoriesPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero
        title={`Developer Tools`}
        description={'Tools for developers to build better products'}
      />

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
