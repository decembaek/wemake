import type { Route } from './+types/social-auth-page';

export const meta: Route.MetaFunction = () => [
  { title: '소셜 로그인 | WeMake' },
];

export default function SocialAuthPage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">소셜 로그인</h1>
        <p className="text-sm text-muted-foreground">
          소셜 계정으로 로그인을 진행합니다
        </p>
      </div>
    </div>
  );
}
