import { Link } from 'react-router';
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import { ChevronUpIcon } from 'lucide-react';
import { cn } from '~/lib/utils';

interface PostCardProps {
  id: string;
  title: string;
  author: string;
  authorAvatarUrl?: string;
  category: string;
  postedAt: string;
  expanded?: boolean;
  upvotesCount?: number;
}

export function PostCard({
  id,
  title,
  author,
  authorAvatarUrl,
  category,
  postedAt,
  expanded = false,
  upvotesCount = 0,
}: PostCardProps) {
  return (
    <Link to={`/community/${id}`} className="block">
      <Card
        className={cn(
          'bg-transparent hover:bg-card/50 transition-colors',
          expanded ? 'flex flex-row items-center gap-2 justify-between' : ''
        )}
      >
        <CardHeader className="flex flex-row items-center gap-2">
          <Avatar className="size-14">
            <AvatarFallback>{author[0]}</AvatarFallback>
            {authorAvatarUrl && <AvatarImage src={authorAvatarUrl} />}
          </Avatar>
          <div className="space-y-2">
            <CardTitle>{title}</CardTitle>
            <div className="flex gap-2 text-xs leading-tight text-muted-foreground">
              <span>{author}</span>
              <span>{category}</span>
              <span>·</span>
              <span>{postedAt}</span>
            </div>
          </div>
        </CardHeader>
        {!expanded && (
          <CardFooter>
            <Button variant="link" className="p-0">
              Reply &rarr;
            </Button>
          </CardFooter>
        )}
        {expanded && (
          <CardFooter className="flex justify-end pb-0">
            <Button variant="outline" className="flex flex-col h-14">
              <ChevronUpIcon className="size-4 shrink-0" />
              <span>{upvotesCount}</span>
            </Button>
          </CardFooter>
        )}
      </Card>
    </Link>
  );
}
