import type { Route } from './+types/profile-page';

export async function loader({ params }: Route.LoaderArgs) {
  return {};
}

export default function ProfilePage({ loaderData }: Route.ComponentProps) {
  return (
    <div className="max-w-screen-md flex flex-col space-y-10">
      <div className="space-y-2">
        <h4 className="text-lg font-bold">Headline</h4>
        <p>I'm a product desiner based in Seoul, Korea.</p>
      </div>
      <div className="space-y-2">
        <h4 className="text-lg font-bold">About</h4>
        <p>I'm a product desiner based in Seoul, Korea.</p>
      </div>
    </div>
  );
}
