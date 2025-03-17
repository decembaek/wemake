import { MessageCircleIcon } from 'lucide-react';

export const meta = () => {
  return [{ title: 'Messages' }];
};

export default function MessagesPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <MessageCircleIcon className="size-12 text-muted-foreground" />
      <h1 className="text-xl text-muted-foreground font-semibold">
        Click on a message in the sidebar to view it
      </h1>
    </div>
  );
}
