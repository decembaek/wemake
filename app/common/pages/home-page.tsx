import type { Route } from './+types/home-page';

interface HomePageProps extends Route.ComponentProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold">Welcome to weMake</h1>
      <p className="mt-4">
        Get started by exploring our features or creating your own.
      </p>
    </div>
  );
}

// export function loader({ request }: Route.LoaderArgs) {
//   return {
//     // 홈페이지 데이터를 여기서 로드할 예정입니다
//     message: '홈페이지 데이터를 로드합니다',
//   };
// }

export function loader(_: Route.LoaderArgs) {
  // return Response.json({ message: 'I handle GET' });
  return {};
}

export function meta({ matches }: Route.MetaArgs): Route.MetaDescriptors {
  return [{ title: '홈' }, { name: 'description', content: '홈페이지' }];
}
