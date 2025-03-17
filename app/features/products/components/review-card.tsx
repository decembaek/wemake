import { StarIcon } from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';

interface ReviewCardProps {
  username: string;
  displayName: string;
  avatarUrl?: string;
  rating: number;
  content: string;
  createdAt: string;
}

export function ReviewCard({
  username,
  displayName,
  avatarUrl,
  rating,
  content,
  createdAt,
}: ReviewCardProps) {
  return (
    <div className="space-y-5">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback>{displayName[0]}</AvatarFallback>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div>
          <h4 className="text-lg font-bold">{displayName}</h4>
          <p className="text-sm text-muted-foreground">@{username}</p>
        </div>
      </div>
      <div className="flex text-yellow-400">
        {Array.from({ length: rating }).map((_, index) => (
          <StarIcon key={index} className="size-4" fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground">{content}</p>
      <span className="text-xs text-muted-foreground">{createdAt}</span>
    </div>
  );
}
