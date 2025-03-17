import { Form, Link } from 'react-router';
import { Button } from '~/common/components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import { DotIcon, MessageCircleIcon } from 'lucide-react';
import { useState } from 'react';
import { Textarea } from '~/common/components/ui/textarea';

interface ReplyProps {
  username: string;
  avatarUrl?: string;
  content: string;
  createdAt: string;
  topLevel?: boolean;
}

export function Reply({
  username,
  avatarUrl,
  content,
  createdAt,
  topLevel,
}: ReplyProps) {
  const [replying, setReplying] = useState(false);

  const toggleReplying = () => {
    setReplying((prev) => !prev);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-start gap-5 w-2/3">
        <Avatar className="size-14">
          <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
          {avatarUrl && <AvatarImage src={avatarUrl} />}
        </Avatar>
        <div className="flex flex-col gap-4 items-start">
          <div className="flex gap-2 items-center">
            <Link to={`/users/@${username}`}>
              <h4 className="font-medium">{username}</h4>
            </Link>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">{createdAt}</span>
          </div>
          <p className="text-muted-foreground w-2/3">{content}</p>
          <Button variant="ghost" className="self-end" onClick={toggleReplying}>
            <MessageCircleIcon className="size-4" /> Reply
          </Button>
        </div>
        <div></div>
      </div>
      {replying && (
        <>
          <Form className="flex items-start gap-5 w-3/4">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/apple.png" />
            </Avatar>
            <div className="flex flex-col gap-5 items-end w-full">
              <Textarea
                placeholder="Write a reply"
                className="w-full resize-none"
                rows={5}
              />
              <Button type="submit">Reply</Button>
            </div>
          </Form>
        </>
      )}
      {topLevel && (
        <div className="pl-20 w-full">
          <Reply
            username="Nico"
            avatarUrl="https://github.com/apple.png"
            content="I'm using Todoist. It's great for managing tasks and projects."
            createdAt="12 hours ago"
            topLevel={false}
          />
        </div>
      )}
    </div>
  );
}
