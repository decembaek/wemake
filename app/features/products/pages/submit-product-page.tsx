import { Hero } from '~/common/components/hero';
import type { Route } from './+types/submit-product-page';
import { Form } from 'react-router';
import { Input } from '~/common/components/ui/input';
import { Button } from '~/common/components/ui/button';
import { Label } from '~/common/components/ui/label';
import InputPair from '~/common/components/input-pair';

import SelectPair from '~/common/components/select-pair';
import { useState } from 'react';

interface Props extends Route.ComponentProps {}

export const meta: Route.MetaFunction = () => {
  return [
    { title: 'Submit Product - weMake' },
    { name: 'description', content: 'Submit your product' },
  ];
};

export default function SubmitPage({}: Props) {
  const [icon, setIcon] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setIcon(URL.createObjectURL(file));
    }
  };
  return (
    <div>
      <Hero title="Submit Product" description="Submit your product" />
      <Form className="grid grid-cols-2 gap-10 max-w-screen-lg mx-auto">
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
          <Button type="submit" className="w-full" size="lg">
            Submit
          </Button>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="size-40 rounded-xl shadow-xl overflow-hidden">
            {icon ? (
              <img src={icon} className="object-cover w-full h-full" />
            ) : (
              <></>
            )}
          </div>
          <Label className="flex flex-col gap-1">
            Logo
            <small className="text-muted-foreground">
              This is the icon of your product
            </small>
          </Label>

          <Input
            type="file"
            className="w-1/2"
            onChange={onChange}
            required
            name="icon"
            multiple
          />
          <div className="flex flex-col text-xs">
            <span className="text-muted-foreground">
              Recommended size: 128x128px
            </span>
            <span className="text-muted-foreground">
              Allow formats: PNG, JPG, GIF, SVG
            </span>
            <span className="text-muted-foreground">Max file size: 1MB</span>
          </div>
        </div>
      </Form>
    </div>
  );
}
