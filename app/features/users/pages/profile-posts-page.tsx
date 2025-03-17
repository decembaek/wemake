import type { Route } from './+types/profile-posts-page';
import { PostCard } from '~/features/community/components/post-card';

export const meta = () => {
  return [{ title: '사용자 게시물 목록' }];
};

export async function loader({ params }: Route.LoaderArgs) {
  return {};
}

export default function ProfilePostsPage() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 11 }).map((_, index) => (
        <PostCard
          id={`postId-${index}`}
          title={`Post Title ${index}`}
          author="Nico"
          authorAvatarUrl="https://github.com/shadcn.png"
          category="Productivity"
          postedAt="12 Hours Ago"
          expanded
        />
      ))}
    </div>
  );
}
