import { Separator } from '@radix-ui/react-separator';
import { Link } from 'react-router';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import { cn } from '~/lib/utils';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
  BarChart3Icon,
  BellIcon,
  LogOutIcon,
  MessageCircleIcon,
  SettingsIcon,
  UserIcon,
} from 'lucide-react';

const menus = [
  {
    name: 'Products',
    to: '/products',
    items: [
      {
        name: 'Leaderboards',
        description: 'Leaderboards',
        to: '/products/leaderboards',
      },
      {
        name: 'Categories',
        description: 'Categories',
        to: '/products/categories',
      },
      {
        name: 'Search',
        description: 'Search',
        to: '/products/search',
      },
      {
        name: 'Submit a Product',
        description: 'Submit a Product',
        to: '/products/submit',
      },
      {
        name: 'Promote',
        description: 'Promote',
        to: '/products/promote',
      },
    ],
  },
  {
    name: 'Jobs',
    to: '/jobs',
    items: [
      {
        name: 'Remote Jobs',
        description: 'Find a remote job',
        to: '/jobs?location=remote',
      },
      {
        name: 'Full-Time Jobs',
        description: 'Find a full-time job',
        to: '/jobs?type=full-time',
      },
      {
        name: 'Freelance Jobs',
        description: 'Find a freelance job',
        to: '/jobs?type=freelance',
      },
      {
        name: 'Internships',
        description: 'Find an internship',
        to: '/jobs?type=internship',
      },
      {
        name: 'Submit a Job',
        description: 'Submit a job',
        to: '/jobs/submit',
      },
    ],
  },
  {
    name: 'Community',
    to: '/community',
    items: [
      {
        name: 'All Posts',
        description: 'All Posts',
        to: '/community',
      },
      {
        name: 'Top Posts',
        description: 'Top Posts',
        to: '/community?sort=top',
      },
      {
        name: 'New Posts',
        description: 'New Posts',
        to: '/community?sort=new',
      },
      {
        name: 'Create a Post',
        description: 'Create a Post',
        to: '/community/create',
      },
    ],
  },
  {
    name: 'IdeasGPT',
    to: '/ideas',
  },
  {
    name: 'Teams',
    to: '/teams',
    items: [
      {
        name: 'All Teams',
        description: 'All Teams',
        to: '/teams',
      },
      {
        name: 'Create a Team',
        description: 'Create a Team',
        to: '/teams/create',
      },
    ],
  },
];

export default function Navigation({
  isLoggedIn,
  hasNotifications,
  hasMessages,
}: {
  isLoggedIn: boolean;
  hasNotifications: boolean;
  hasMessages: boolean;
}) {
  return (
    <nav
      className="flex px-20 h-16 items-center justify-between backdrop-blur 
    fixed top-0 left-0 right-0 z-50 bg-background/50"
    >
      <div className="flex items-center gap-2">
        <Link to="/" className="font-bold tracking-tighter text-lg">
          weMake
        </Link>
        <Separator orientation="vertical" className="h-6 mx-4" />
        <NavigationMenu>
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                {menu.items ? (
                  <>
                    <Link to={menu.to}>
                      <NavigationMenuTrigger>{menu.name}</NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid w-[500px] font-light gap-3 p-4 grid-cols-2">
                        {menu.items?.map((item) => (
                          <NavigationMenuItem
                            key={item.name}
                            className={cn([
                              'select-none rounded-md transition-colors focus:bg-accent hover:bg-accent/50',
                              item.to === '/products/promote' &&
                                'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20',
                              item.to === '/jobs/submit' &&
                                'col-span-2 bg-primary/10 hover:bg-primary/20 focus:bg-primary/20',
                            ])}
                          >
                            <NavigationMenuLink asChild>
                              <Link
                                className="p-3 space-y-1 block leading-none no-underline outline-none"
                                to={item.to}
                              >
                                <span className="text-sm font-medium">
                                  {item.name}
                                </span>
                                <p className="text-sm leading-snug text-muted-foreground">
                                  {item.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          </NavigationMenuItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <Link className={navigationMenuTriggerStyle()} to={menu.to}>
                    {menu.name}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      {isLoggedIn ? (
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/notifications">
              <BellIcon className="size-4" />
              {hasNotifications && (
                <div className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs w-2 h-2 flex items-center justify-center"></div>
              )}
            </Link>
          </Button>
          <Button size="icon" variant="ghost" asChild className="relative">
            <Link to="/my/messages">
              <MessageCircleIcon className="size-4" />
              {hasMessages && (
                <div className="absolute top-1.5 right-1.5 bg-red-500 text-white rounded-full text-xs w-2 h-2 flex items-center justify-center"></div>
              )}
            </Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/decembaek.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>
                <span className="font-medium">Decembaek</span>
                <span className="text-xs text-muted-foreground">@username</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/profile">
                    <UserIcon className="size-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/my/settings">
                    <SettingsIcon className="size-4 mr-2" />
                    Settings
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/auth/logout">
                  <LogOutIcon className="size-4 mr-2" />
                  Logout
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <Button asChild variant="outline">
            <Link to="/auth/login">Login</Link>
          </Button>
          <Button asChild>
            <Link to="/auth/signup">Sign Up</Link>
          </Button>
        </div>
      )}
    </nav>
  );
}
