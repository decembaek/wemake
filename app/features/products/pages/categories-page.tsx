import { Hero } from '~/common/components/hero';
import type { Route } from './+types/categories-page';
import { CategoryCard } from '../components/category-card';

interface Props extends Route.ComponentProps {}

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Categories - weMake' },
    { name: 'description', content: 'Browse product categories' },
  ];
};

export default function CategoriesPage({ loaderData }: Props) {
  return (
    <div className="space-y-20">
      <Hero title="Categories" description="Browse product categories" />
      <div className="grid grid-cols-4 gap-10">
        {Array.from({ length: 10 }).map((_, index) => (
          <CategoryCard
            key={index}
            id={`categoryId-${index}`}
            name={`Category Name ${index}`}
            description={`Category Description ${index}`}
          />
        ))}
      </div>
    </div>
  );
}
