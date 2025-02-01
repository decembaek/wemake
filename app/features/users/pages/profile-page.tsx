// import type { Route } from '~/common/types/route';
import type { Route } from '.react-router/types/app/+types/root';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

// interface ProfilePageProps extends Route.ComponentProps {}

export function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <Card>
        <CardHeader>
          <CardTitle>프로필</CardTitle>
        </CardHeader>
        <CardContent>
          {/* 프로필 내용이 여기에 들어갈 예정입니다 */}
        </CardContent>
      </Card>
    </div>
  );
}

export function loader() {
  return {
    // 프로필 데이터를 여기서 로드할 예정입니다
  };
}

export function meta() {
  return {
    title: '프로필',
    description: '사용자 프로필 페이지',
  };
}
