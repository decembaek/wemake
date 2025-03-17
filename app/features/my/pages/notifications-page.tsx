import type { Route } from './+types/notifications-page';
import { NotificationCard } from '~/features/users/components/notification-card';

export function meta({}: Route.MetaFunction) {
  return [
    { title: '알림 | Wemake' },
    { name: 'description', content: '내 알림 목록' },
  ];
}

export default function NotificationsPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <h1 className="text-4xl font-bold">Notifications</h1>
      <div className="flex flex-col items-start gap-5">
        <NotificationCard
          avatarUrl="https://github.com/shadcn.png"
          avatarFallback="CN"
          userName="Steve Jobs"
          action="followed you"
          timeAgo="2 days ago"
          seen={false}
        />
      </div>
    </div>
  );
}
