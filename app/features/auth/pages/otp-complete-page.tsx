import { Form } from 'react-router';
import type { Route } from './+types/otp-complete-page';
import InputPair from '~/common/components/input-pair';
import { Button } from '~/common/components/ui/button';

export const meta: Route.MetaFunction = () => [
  { title: 'OTP 인증 완료 | WeMake' },
];

export default function OtpCompletePage() {
  return (
    <div className="flex flex-col relative items-center justify-center h-full">
      <div className="flex flex-col items-center justify-center w-full max-w-md gap-10">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Confirm OTP</h1>
          <p className="text-sm text-muted-foreground">
            Enter the 4-digit code sent to your email
          </p>
        </div>
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
            id="otp"
            label="OTP"
            description="Enter the 4-digit code sent to your email"
            name="otp"
            required
            type="number"
            placeholder="Enter the 4-digit code"
          />
          <Button className="w-full" type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </div>
  );
}
