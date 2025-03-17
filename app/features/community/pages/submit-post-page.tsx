import { Hero } from '~/common/components/hero';
import { Button } from '~/common/components/ui/button';
import type { Route } from './+types/submit-post-page';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';

export function action({ request }: Route.ActionArgs) {
  // TODO: Implement post creation logic
  return {};
}

export const meta: Route.MetaFunction = () => [
  { title: '글쓰기 - WeMake' },
  { name: 'description', content: 'WeMake 커뮤니티에 새 글을 작성해보세요.' },
];

export default function SubmitPostPage({ actionData }: Route.ComponentProps) {
  return (
    <div className="space-y-20">
      <Hero title="Create Discussion" description="Create a new discussion" />
      <Form className="flex flex-col gap-10 max-w-screen-md mx-auto">
        <InputPair
          label="Title"
          name="title"
          id="title"
          description="40 characters or less"
          required
          placeholder="i.e What is the best productivity tool?"
        />
        <SelectPair
          required
          name="category"
          label="Category"
          description="Select a category"
          placeholder="Select a category"
          options={[
            { label: 'General', value: 'general' },
            { label: 'Announcements', value: 'announcements' },
            { label: 'Help', value: 'help' },
            { label: 'Showcase', value: 'showcase' },
          ]}
        />
        <InputPair
          label="Content"
          name="content"
          id="content"
          description="(1000 characters or less)"
          required
          placeholder="i.e I'm looking for a new productivity tool"
          textArea
        />
        <Button type="submit" className="mx-auto w-full">
          Submit
        </Button>
      </Form>
    </div>
  );
}
