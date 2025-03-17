import { ProductCard } from '~/features/products/components/product-card';
import type { Route } from './+types/profile-products-page';

export const meta = () => {
  return [{ title: '사용자 제품 목록' }];
};

export async function loader({ params }: Route.LoaderArgs) {
  return {};
}

export default function ProfileProductsPage() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
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
  );
}
