import type { Route } from './+types/social-auth-complete-page';

export const meta: Route.MetaFunction = () => [
  { title: '소셜 로그인 완료 | WeMake' },
];

export default function SocialAuthCompletePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">로그인 완료</h1>
        <p className="text-sm text-muted-foreground">
          소셜 로그인이 완료되었습니다
        </p>
      </div>
    </div>
  );
}
