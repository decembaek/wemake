import { Badge } from '~/common/components/ui/badge';
import type { Route } from './+types/job-page';
import { DotIcon } from 'lucide-react';
import { Button } from '~/common/components/ui/button';

export function loader({ request, params }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Job Details | WeMake' }];
}

export default function JobPage() {
  return (
    <div>
      <div className="bg-gradient-to-tr from-primary/80 to-primary/10 h-60 w-full rounded-lg"></div>
      <div className="grid grid-cols-6 -mt-20 gap-20 items-start">
        <div className="col-span-4 space-y-5">
          <div>
            <div className="size-40 bg-white rounded-full overflow-hidden border-white relative left-5">
              <img
                src="https://github.com/facebook.png"
                alt="company logo"
                className=""
              />
            </div>
            <h1 className="text-4xl font-bold">Software Engineer</h1>
            <h4 className="text-muted-foreground">Meta Inc.</h4>
          </div>
          <div className="flex gap-2">
            <Badge variant={'outline'}>Full-time</Badge>
            <Badge variant={'outline'}>remote</Badge>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Overview</h4>
            <p className="text-lg ">
              This is a full-time remote job. We are looking for a software
              engineer with 3+ years of experience.
            </p>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Responsibilities</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Qualifications</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Benefits</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2.5">
            <h4 className="text-2xl font-bold">Skills</h4>
            <ul className="text-lg list-disc list-inside">
              {[
                'React',
                'Next.js',
                'Typescript',
                'Tailwind CSS',
                'Node.js',
                'Express',
                'MongoDB',
                'PostgreSQL',
                'Docker',
                'Kubernetes',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 space-y-5 mt-32 sticky top-20 border rounded-lg p-6">
          <div className="flex flex-col">
            <span className="text-2xl font-medium">$100,000 - $120,000</span>
            <span className="text-sm text-muted-foreground">Avg. Salary</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-medium">Remote</span>
            <span className="text-sm text-muted-foreground">Location</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-medium">Full-time</span>
            <span className="text-sm text-muted-foreground">Type</span>
          </div>
          <div className="flex">
            <span className="text-sm text-muted-foreground">
              Posted 1 day ago
            </span>
            <DotIcon className="size-4" />
            <span className="text-sm text-muted-foreground">395 views</span>
          </div>
          <Button className="w-full">Apply now</Button>
        </div>
      </div>
    </div>
  );
}
