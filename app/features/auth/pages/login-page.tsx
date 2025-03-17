import { Form, Link } from 'react-router';
import type { Route } from './+types/login-page';
import { Button } from '~/common/components/ui/button';
import InputPair from '~/common/components/input-pair';
import { AuthButtons } from '../components/auth-buttons';

export const meta: Route.MetaFunction = () => [{ title: '로그인 | WeMake' }];

export default function LoginPage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/auth/join">Join</Link>
      </Button>
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <h1 className="text-2xl font-semibold">Login to WeMake</h1>
        <Form className="w-full space-y-4">
          <InputPair
            id="email"
            label="Email"
            description="Enter your email"
            name="email"
            required
            type="email"
            placeholder="Enter your email"
          />
          <InputPair
            id="password"
            label="Password"
            description="Enter your password"
            name="password"
            required
            type="password"
            placeholder="Enter your password"
          />
          <Button type="submit">Login</Button>
        </Form>
        <AuthButtons />
      </div>
    </div>
  );
}
