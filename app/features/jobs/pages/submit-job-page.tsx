import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-job-page';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { JOB_TYPES, LOCATION_TYPES, SALARY_RANGE } from '../constants';
import { Button } from '~/common/components/ui/button';

export function loader({ request }: Route.LoaderArgs) {
  return {};
}

export function action({ request }: Route.ActionArgs) {
  return {};
}

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Submit Job | WeMake' }];
}

export default function SubmitJobPage({
  loaderData,
  actionData,
}: Route.ComponentProps) {
  return (
    <div>
      <Hero
        title="Post a Job"
        description="Reach out to the best developers in the world"
      />
      <Form className="max-w-screen-2xl flex flex-col items-center gap-10 mx-auto">
        <div className="grid grid-cols-3 w-full gap-10">
          <InputPair
            id="position"
            label="Postion"
            description="(40 characters max)"
            name="position"
            maxLength={40}
            type="text"
            required
            placeholder="i,e Senior React Developer"
          />
          <InputPair
            id="overview"
            label="Overview"
            description="(1000 characters max)"
            name="overview"
            maxLength={400}
            type="text"
            required
            placeholder="i,e Senior React Developer"
            textArea
          />
          <InputPair
            id="responsibilities"
            label="Responsibilities"
            description="(1000 characters max, comma separated)"
            name="responsibilities"
            maxLength={400}
            type="text"
            required
            placeholder="i,e implements new features, refactors code, etc."
            textArea
          />
          <InputPair
            id="qualifications"
            label="Qualifications"
            description="(1000 characters max, comma separated)"
            name="qualifications"
            maxLength={400}
            type="text"
            required
            placeholder="i,e implements new features, refactors code, etc."
            textArea
          />
          <InputPair
            id="benefits"
            label="Benefits"
            description="(1000 characters max, comma separated)"
            name="benefits"
            maxLength={400}
            type="text"
            required
            placeholder="i,e implements new features, refactors code, etc."
            textArea
          />
          <InputPair
            id="skills"
            label="Skills"
            description="(1000 characters max, comma separated)"
            name="skills"
            maxLength={400}
            type="text"
            required
            placeholder="i,e implements new features, refactors code, etc."
            textArea
          />
          <InputPair
            id="company-name"
            label="Company Name"
            description="(40 characters max)"
            name="company-name"
            maxLength={40}
            type="text"
            required
            placeholder="i,e Meta Inc."
          />
          <InputPair
            id="company-logo-url"
            label="Company Logo URL"
            description="(40 characters max)"
            name="company-logo-url"
            maxLength={40}
            type="text"
            required
            placeholder="i,e https://example.com/logo.png"
          />
          <InputPair
            id="company-location"
            label="Company Location"
            description="(40 characters max)"
            name="company-location"
            maxLength={40}
            type="text"
            required
            placeholder="i,e San Francisco, CA"
          />
          <InputPair
            id="apply-url"
            label="Apply URL"
            description="(40 characters max)"
            name="apply-url"
            maxLength={40}
            type="text"
            required
            placeholder="i,e https://example.com/apply"
          />
          <SelectPair
            label="Job Type"
            description="(40 characters max)"
            name="job-type"
            required
            placeholder="Select Job Type"
            options={JOB_TYPES.map((type) => ({
              label: type.label,
              value: type.value,
            }))}
          />
          <SelectPair
            label="Job Location"
            description="(40 characters max)"
            name="job-location"
            required
            placeholder="Select Job Location"
            options={LOCATION_TYPES.map((location) => ({
              label: location.label,
              value: location.value,
            }))}
          />
          <SelectPair
            label="Salary Range"
            description="(40 characters max)"
            name="salary-range"
            required
            placeholder="Select Salary Range"
            options={SALARY_RANGE.map((range) => ({
              label: range,
              value: range,
            }))}
          />
        </div>
        <Button type="submit" className="w-full max-w-sm" size={'lg'}>
          Post job for $100
        </Button>
      </Form>
    </div>
  );
}
