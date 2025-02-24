import { Link } from 'react-router';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';
import { Button } from '~/common/components/ui/button';
import { Badge } from '~/common/components/ui/badge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';

interface TeamCardProps {
  id: string;
  username: string;
  userAvatarUrl?: string;
  positions: string[];
  projectDescription: string;
}

export function TeamCard({
  id,
  username,
  userAvatarUrl,
  positions,
  projectDescription,
}: TeamCardProps) {
  return (
    <Link to={`/teams/${id}`}>
      <Card className="bg-transparent hover:bg-card/50 transition-colors">
        <CardHeader className="flex flex-row items-center">
          <CardTitle className="text-base leading-loose">
            <Badge
              variant="secondary"
              className="inline-flex shadow-sm items-center"
            >
              <span>@{username}</span>
              <Avatar className="size-4">
                <AvatarFallback>{username[0]}</AvatarFallback>
                {userAvatarUrl && <AvatarImage src={userAvatarUrl} />}
              </Avatar>
            </Badge>
            <span>is looking for</span>
            {positions.map((position, index) => (
              <Badge key={index} className="text-sm">
                {position}
              </Badge>
            ))}
            <span> to build </span>
            <span>{projectDescription}</span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex justify-end">
          <Button variant="link">Join team &rarr;</Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
