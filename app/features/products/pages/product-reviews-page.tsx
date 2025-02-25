import type { Route } from './+types/product-reviews-page';
import type { MetaFunction } from 'react-router';
import { Link } from 'react-router';
import { Button } from '~/common/components/ui/button';

interface ProductReviewsPageProps extends Route.ComponentProps {}

export function loader({ params }: Route.LoaderArgs) {
  return {
    reviews: [
      // 실제 리뷰 데이터를 여기서 로드
    ],
    productId: params.productId,
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: '제품 리뷰 | WeMake' },
    { name: 'description', content: '제품에 대한 사용자 리뷰를 확인하세요.' },
  ];
};

export default function ProductReviewsPage() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">제품 리뷰</h1>
        <Button asChild></Button>
      </div>
      <div className="grid gap-4"></div>
    </div>
  );
}
