import { Hero } from '~/common/components/hero';
import type { Route } from './+types/team-page';
import { Button } from '~/common/components/ui/button';
import { Badge } from '~/common/components/ui/badge';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/common/components/ui/avatar';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '~/common/components/ui/card';

export function meta({}: Route.MetaFunction) {
  return [
    { title: 'Team Details | Wemake' },
    { name: 'description', content: 'View team details and information' },
  ];
}

export default function TeamPage({}: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Join baek's team" />
      <div className="grid grid-cols-6 gap-40 items-start">
        <div className="col-span-4 grid grid-cols-4 gap-5">
          {[
            {
              title: 'Product name',
              value: 'Doggie social',
            },
            {
              title: 'Stage',
              value: 'MVP',
            },
            {
              title: 'Team size',
              value: 3,
            },
            {
              title: 'Available equity',
              value: 50,
            },
          ].map((item) => (
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
                <CardContent className="p-0 font-bold text-2xl">
                  <p>{item.value}</p>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Looking for
              </CardTitle>
              <CardContent className="p-0 font-bold text-2xl">
                <ul className="text-lg list-disc list-inside">
                  {[
                    'Frontend',
                    'Backend',
                    'Fullstack',
                    'Designer',
                    'Product Manager',
                  ].map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </CardHeader>
          </Card>
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Idea description
              </CardTitle>
              <CardContent className="p-0 font-medium text-xl">
                <p>
                  We are building a new social media platform for dogs. We are
                  looking for a frontend developer to join our team.
                </p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
        <aside className="col-span-2 space-y-5 border rounded-lg p-5 shadow-sm">
          <div className="flex gap-5">
            <Avatar className="size-14">
              <AvatarFallback>N</AvatarFallback>
              <AvatarImage src="https://github.com/apple.png" />
            </Avatar>
            <div className="flex flex-col">
              <h4>Baek</h4>
              <Badge variant="secondary">Entrepreneur</Badge>
            </div>
          </div>
          <div className="gap-2 text-sm flex flex-col">
            <span>Joined 3 months ago</span>
            <span>Launched 10 products</span>
          </div>
          <Form className="space-y-4">
            <InputPair
              label="Introduce yourself"
              description="Introduce yourself to the team"
              name="introduction"
              type="text"
              id="introduction"
              required
              textArea
              placeholder="i.e. I'm a frontend developer with 3 years of experience"
            />
            <InputPair
              label="What are you looking for?"
              description="What are you looking for in the team?"
              name="lookingFor"
              type="text"
              id="lookingFor"
              required
              textArea
              placeholder="i.e. I'm looking for a frontend developer with 3 years of experience"
            />
            <Button type="submit" className="w-full">
              Get in torch
            </Button>
          </Form>
        </aside>
      </div>
    </div>
  );
}
