import { Hero } from '~/common/components/hero';
import type { Route } from './+types/ideas-page';
import { Button } from '~/common/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { IdeaCard } from '../components/idea-card';

export const meta: Route.MetaFunction = () => {
  return [
    { title: '아이디어 목록 | WeMake' },
    { name: 'description', content: '혁신적인 아이디어들을 둘러보세요' },
  ];
};

export default function IdeasPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Ideas GPT" description="혁신적인 아이디어들을 둘러보세요" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
          <IdeaCard
            key={index}
            id={`ideasId-${index}`}
            title={`Idea Title ${index} A startup that creates an AI-powered generated personal trainer, delivering customized fitness recommendations and tracking of progress using a mobile app to track workouts and progress as well as a website to manage the business. as a website`}
            viewsCount={123}
            postedAt="12 hours ago"
            likesCount={12}
            claimed={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
