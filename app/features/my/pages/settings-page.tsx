import { Form } from 'react-router';
import type { Route } from './+types/settings-page';
import { Input } from '~/common/components/ui/input';
import InputPair from '~/common/components/input-pair';
import SelectPair from '~/common/components/select-pair';
import { useState } from 'react';
import { Label } from '~/common/components/ui/label';
import { Button } from '~/common/components/ui/button';

export function meta({}: Route.MetaFunction) {
  return [
    { title: '설정 | Wemake' },
    { name: 'description', content: '계정 설정' },
  ];
}

export default function SettingsPage({}: Route.ComponentProps) {
  const [avatar, setAvatar] = useState<string | null>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setAvatar(URL.createObjectURL(file));
    }
  };
  return (
    <div className="space-y-20">
      <div className="grid grid-cols-6 gap-40">
        <div className="col-span-4 flex flex-col gap-10">
          <h2 className="text-2xl font-semibold">Edit profile</h2>
          <Form className="flex flex-col w-1/2 gap-5">
            <InputPair
              label="Name"
              description="Your name"
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              required
            />
            <SelectPair
              label="Role"
              description="What role do you do identify the most with"
              name="role"
              placeholder="Select a role"
              required
              options={[
                { label: 'Developer', value: 'developer' },
                { label: 'Designer', value: 'designer' },
                { label: 'Manager', value: 'manager' },
              ]}
            />
            <InputPair
              label="Headline"
              description="A short description about yourself"
              id="headline"
              name="headline"
              type="text"
              placeholder="Headline"
              required
              textArea
            />
            <InputPair
              label="Bio"
              description="Your public bio. It will be displayed on your profile."
              id="bio"
              name="bio"
              type="text"
              placeholder="Bio"
              required
              textArea
            />
            <Button className="w-full" size="lg">
              Update Profile
            </Button>
          </Form>
        </div>
        <aside className="col-span-2 p-6 rounded-lg border shadow-md">
          <span className="text-sm font-bold text-muted-foreground uppercase">
            Avatar
          </span>
          <div className="flex flex-col space-y-5">
            <div className="size-40 rounded-full shadow-xl overflow-hidden">
              {avatar ? (
                <img src={avatar} className="object-cover w-full h-full" />
              ) : (
                <></>
              )}
            </div>

            <Label className="flex flex-col gap-1">
              Avatar
              <small className="text-muted-foreground">
                This is your profile avatar
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
            <Button className="w-full" size="lg">
              Update Avatar
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
