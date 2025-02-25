import { ChevronUpIcon, Link, StarIcon } from 'lucide-react';
import type { Route } from './+types/product-overview-page';
import type { MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';

interface ProductOverviewPageProps extends Route.ComponentProps {}

export function loader({ params }: Route.LoaderArgs) {
  return {
    product: {
      id: params.productId,
      // 실제 제품 데이터를 여기서 로드
    },
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: '제품 상세 | WeMake' },
    { name: 'description', content: '제품의 상세 정보를 확인하세요.' },
  ];
};

export default function ProductOverviewPage({
  params: { productId },
}: Route.ComponentProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h3 className="text-lg font-bold">What is this product?</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
      <div className="space-y-1">
        <h3 className="text-lg font-bold">How does it work?</h3>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </p>
      </div>
    </div>
  );
}
