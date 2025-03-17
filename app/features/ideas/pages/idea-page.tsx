import { Hero } from '~/common/components/hero';
import type { Route } from './+types/idea-page';
import { Dot, DotIcon, HeartIcon } from 'lucide-react';
import { EyeIcon } from 'lucide-react';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => {
  return [
    { title: `Idea | WeMake` },
    { name: 'description', content: '아이디어 상세 정보' },
  ];
};

export default function IdeaPage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="idea #2133" description="bububububub" />
      <div className="max-w-screen-sm mx-auto flex flex-col items-center gap-10">
        <p className="italic text-center">
          A startup that creates an AI-powered generated personal trainer,
          delivering customized fitness recommendations and tracking of progress
          using a mobile app to track workouts and progress as well as a website
          to manage the business. as a website
        </p>
        <div className="flex items-center text-sm">
          <div className="flex items-center gap-1">
            <EyeIcon className="w-4 h-4" />
            <span>123 views</span>
          </div>
          <DotIcon className="w-4 h-4" />
          <span>12 hours ago</span>
          <DotIcon className="w-4 h-4" />
          <Button variant="outline">
            <HeartIcon className="w-4 h-4" />
            <span>12 likes</span>
          </Button>
        </div>
        <Button size="lg">Claim idea now &rarr;</Button>
      </div>
    </div>
  );
}
