import { Hero } from '~/common/components/hero';
import type { Route } from './+types/teams-page';
import { TeamCard } from '../components/team-card';
export function meta({}: Route.MetaFunction) {
  return [
    { title: 'Teams | Wemake' },
    { name: 'description', content: 'Discover and join amazing teams' },
  ];
}

export default function TeamsPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Teams" description="Find a team looking for a new member" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 11 }).map((_, index) => (
          <TeamCard
            key={index}
            id={`teamId-${index}`}
            username="decembaek"
            userAvatarUrl="https://github.com/decembaek.png"
            positions={[
              'React Developer',
              'Backend Developer',
              'Product Manager',
            ]}
            projectDescription="a new social media platform"
          />
        ))}
      </div>
    </div>
  );
}
