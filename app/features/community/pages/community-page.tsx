import { Hero } from '~/common/components/hero';
import type { Route } from './+types/community-page';
import { Form, Link, useSearchParams } from 'react-router';
import { Button } from '~/common/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '~/common/components/ui/dropdown-menu';
import { ChevronDownIcon } from 'lucide-react';
import { PERIOD_OPTIONS, SORT_OPTIONS } from '../constants';
import { Input } from '~/common/components/ui/input';
import { PostCard } from '../components/post-card';

export function loader({ params }: Route.LoaderArgs) {}

export const meta: Route.MetaFunction = () => [
  { title: '커뮤니티 - WeMake' },
  { name: 'description', content: 'WeMake 커뮤니티' },
];

export default function CommunityPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sorting = searchParams.get('sorting') || 'newest';
  const period = searchParams.get('period') || 'all';
  return (
    <div>
      <Hero title="Community" description="WeMake 커뮤니티" />
      <div className="grid grid-cols-6 items-start gap-40">
        <div className="col-span-4 space-y-10">
          <div className="flex justify-between">
            <div className="space-y-5 w-full">
              <div className="flex items-center gap-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2">
                    <span className="text-sm capitalize">{sorting}</span>
                    <ChevronDownIcon className="size-5" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    {SORT_OPTIONS.map((option) => (
                      <DropdownMenuCheckboxItem
                        className="capitalize cursor-pointer"
                        key={option}
                        onCheckedChange={(checked: boolean) => {
                          if (checked) {
                            searchParams.set('sorting', option);
                            setSearchParams(searchParams);
                          }
                        }}
                      >
                        {option}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {sorting === 'popular' && (
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex items-center gap-2">
                      <span className="text-sm capitalize">{period}</span>
                      <ChevronDownIcon className="size-5" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      {PERIOD_OPTIONS.map((option) => (
                        <DropdownMenuCheckboxItem
                          className="capitalize cursor-pointer"
                          key={option}
                          onCheckedChange={(checked: boolean) => {
                            if (checked) {
                              searchParams.set('period', option);
                              setSearchParams(searchParams);
                            }
                          }}
                        >
                          {option}
                        </DropdownMenuCheckboxItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
              </div>
              <Form className="w-2/3">
                <Input type="text" placeholder="Search" name="search" />
              </Form>
            </div>
            <Button asChild>
              <Link to="/community/submit">Create Post</Link>
            </Button>
          </div>
          <div className="space-y-5">
            {Array.from({ length: 11 }).map((_, index) => (
              <PostCard
                id={`postId-${index}`}
                title={`Post Title ${index}`}
                author="Nico"
                authorAvatarUrl="https://github.com/shadcn.png"
                category="Productivity"
                postedAt="12 Hours Ago"
                expanded
              />
            ))}
          </div>
        </div>
        <aside className="col-span-2 space-y-4">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Topcis
          </span>
          <div className="flex flex-col gap-8 items-start">
            {[
              'AI Tools',
              'Design Tools',
              'Dev Tools',
              'Note Taking Apps',
              'Productivity Tools',
            ].map((category) => (
              <Button asChild variant="link" key={category} className="pl-0">
                <Link
                  to={`/community?topic=${category}`}
                  className="font-semibold"
                >
                  {category}
                </Link>
              </Button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
