import { IdeaCard } from '~/features/ideas/components/idea-card';
import type { Route } from './+types/dashboard-ideas-page';

export function meta({}: Route.MetaFunction) {
  return [
    { title: '내 아이디어 | Wemake' },
    { name: 'description', content: '내가 작성한 아이디어 목록' },
  ];
}

export default function DashboardIdeasPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-5 h-full">
      <h1 className="text-2xl font-semibold mb-6">Claimed Ideas</h1>
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={`ideasId-${index}`}
            title={`Idea Title ${index} A startup that ess. as a website`}
            viewsCount={123}
            postedAt="12 hours ago"
            likesCount={12}
            claimed={false}
          />
        ))}
      </div>
    </div>
  );
}
