import { SendIcon } from 'lucide-react';
import { Form } from 'react-router';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import { Button } from '~/common/components/ui/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { Textarea } from '~/common/components/ui/textarea';
import { MessagesBubble } from '../components/messages-bubble';

export default function MessagePage() {
  return (
    <div className="flex flex-col justify-between h-full">
      <Card>
        <CardHeader className="flex flex-row gap-4">
          <Avatar className="size-14">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-0">
            <CardTitle>Shadcn</CardTitle>
            <CardDescription>2 days ago</CardDescription>
          </div>
        </CardHeader>
      </Card>
      <div className="py-10 overflow-y-scroll flex flex-col justify-start h-full">
        {Array.from({ length: 3 }).map((_, index) => (
          <MessagesBubble
            key={index}
            avatarUrl="https://github.com/shadcn.png"
            avatarFallback="CN"
            content="this is a message from kim in iheaven, make sure to reply because if you don't, you will be punished."
            isCurrentUser={index % 2 === 0}
          />
        ))}
      </div>
      <Card>
        <CardHeader>
          <Form className="relative flex justify-end items-center">
            <Textarea
              placeholder="Write a message..."
              rows={2}
              className="resize-none"
            ></Textarea>
            <Button type="submit" size={'icon'} className="absolute right-3">
              <SendIcon className="size-4" />
            </Button>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
}
