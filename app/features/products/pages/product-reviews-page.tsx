import { StarIcon } from 'lucide-react';
import type { Route } from './+types/product-reviews-page';
import type { MetaFunction } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { ReviewCard } from '../components/review-card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/common/components/ui/dialog';
import CreateReviewDialog from '../components/create-review-dialog';

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
    <Dialog>
      <div className="space-y-10 max-w-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">10 Reviews</h2>
          <DialogTrigger>
            <Button variant={'secondary'}>Write a review</Button>
          </DialogTrigger>
        </div>
        <div className="space-y-20">
          {Array.from({ length: 10 }).map((_, index) => (
            <ReviewCard
              key={index}
              username="Username"
              displayName="John Doe"
              avatarUrl="https://github.com/shadcn.png"
              rating={5}
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
              createdAt="10 days ago"
            />
          ))}
        </div>
      </div>
      <CreateReviewDialog />
    </Dialog>
  );
}
