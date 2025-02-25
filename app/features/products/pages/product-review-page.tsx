import type { Route } from './+types/product-review-page';
import type { MetaFunction } from 'react-router';
import { Form } from 'react-router';
import { Button } from '~/common/components/ui/button';
import { Textarea } from '~/common/components/ui/textarea';
import { Input } from '~/common/components/ui/input';

interface ProductReviewPageProps extends Route.ComponentProps {}

export function loader({ params }: Route.LoaderArgs) {
  return {
    productId: params.productId,
  };
}

export function action({ request, params }: Route.ActionArgs) {
  // 실제 리뷰 생성 로직 구현
  return {
    status: 'success',
    message: '리뷰가 성공적으로 작성되었습니다.',
  };
}

export const meta: MetaFunction = () => {
  return [
    { title: '리뷰 작성 | WeMake' },
    { name: 'description', content: '제품에 대한 리뷰를 작성하세요.' },
  ];
};

export default function ProductReviewPage({
  loaderData,
  actionData,
}: ProductReviewPageProps) {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">리뷰 작성</h1>
      <Form method="post" className="space-y-4 max-w-xl">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            제목
          </label>
          <Input
            id="title"
            name="title"
            required
            placeholder="리뷰 제목을 입력하세요"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="content" className="text-sm font-medium">
            내용
          </label>
          <Textarea
            id="content"
            name="content"
            required
            placeholder="리뷰 내용을 입력하세요"
            rows={5}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="rating" className="text-sm font-medium">
            평점
          </label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="1"
            max="5"
            required
            placeholder="1-5 사이의 평점을 입력하세요"
          />
        </div>
        <Button type="submit" className="w-full">
          리뷰 등록하기
        </Button>
      </Form>
    </div>
  );
}
