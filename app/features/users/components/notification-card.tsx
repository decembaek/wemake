import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import { EyeIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface NotificationCardProps {
  avatarUrl: string;
  avatarFallback: string;
  userName: string;
  action: string;
  timeAgo: string;
  seen: boolean;
}

export function NotificationCard({
  avatarUrl,
  avatarFallback,
  userName,
  action,
  timeAgo,
  seen,
}: NotificationCardProps) {
  return (
    <Card className={cn('min-w-[450px]', seen ? '' : 'bg-yellow-500/60')}>
      <CardHeader className="flex flex-row gap-5 items-start">
        <Avatar>
          <AvatarImage src={avatarUrl} />
          <AvatarFallback>{avatarFallback}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-lg font-bold">
            <span>{userName}</span>
            <span> {action}</span>
          </CardTitle>
          <small className="text-muted-foreground text-sm">{timeAgo}</small>
        </div>
      </CardHeader>
      <CardFooter className="flex">
        <Button variant={'outline'} size={'icon'}>
          <EyeIcon />
        </Button>
      </CardFooter>
    </Card>
  );
}
