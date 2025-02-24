import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-page';
import { Form } from 'react-router';
import { Input } from '~/common/components/ui/input';
import { Button } from '~/common/components/ui/button';
import { Label } from '~/common/components/ui/label';
import InputPair from '~/common/components/input-pair';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/common/components/ui/select';
import SelectPair from '~/common/components/select-pair';

interface Props extends Route.ComponentProps {}

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Submit Product - weMake' },
    { name: 'description', content: 'Submit your product' },
  ];
};

export default function SubmitPage({}: Props) {
  return (
    <div>
      <Hero title="Submit Product" description="Submit your product" />
      <Form className="grid grid-colos-2 gap-10 max-w-screen-lg mx-auto">
        <div className="space-y-5">
          <InputPair
            label="Name"
            description="This is name of your product"
            name="name"
            id="name"
            required
            type="text"
            placeholder="Your product name"
          />
          <InputPair
            label="Tagline"
            description="(60 characters or less)"
            name="tagline"
            id="tagline"
            required
            type="text"
            placeholder="A concise tagline for your product"
          />
          <InputPair
            label="URL"
            description="This is the URL of your product"
            name="url"
            id="url"
            required
            type="text"
            placeholder="https://example.com"
          />
          <InputPair
            label="Description"
            description="This is the description of your product"
            name="description"
            id="description"
            required
            type="text"
            placeholder="A detailed description of your product"
            textArea={true}
          />
          <SelectPair
            label="Category"
            description="This is the category of your product"
            name="category"
            required
            placeholder="Select a category"
            options={[
              { label: 'Category 1', value: 'category-1' },
              { label: 'Category 2', value: 'category-2' },
            ]}
          />
        </div>
      </Form>
    </div>
  );
}
