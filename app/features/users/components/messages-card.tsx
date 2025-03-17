import { Link, useLocation } from 'react-router';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import {
  SidebarMenuItem,
  SidebarMenuButton,
} from '~/common/components/ui/sidebar';

interface MessagesCardProps {
  avatarUrl: string;
  avatarFallback: string;
  name: string;
  email: string;
  id: number;
}

export function MessagesCard({
  avatarUrl,
  avatarFallback,
  name,
  email,
  id,
}: MessagesCardProps) {
  const location = useLocation();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        className="h-18"
        asChild
        isActive={location.pathname === `/my/messages/${id}`}
      >
        <Link to={`/my/messages/${id}`}>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src={avatarUrl} />
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-muted-foreground">{email}</p>
            </div>
          </div>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}
