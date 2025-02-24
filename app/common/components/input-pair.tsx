import type { InputHTMLAttributes } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

export default function InputPair({
  label,
  description,
  textArea,
  ...rest
}: InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & {
  label: string;
  description: string;
  textArea?: boolean;
}) {
  return (
    <>
      <div className="space-y-2 flex flex-col">
        <Label htmlFor={rest.id} className="flex flex-col">
          {label}
          <small className="text-muted-foreground">{description}</small>
        </Label>
        {textArea ? <Textarea rows={5} {...rest} /> : <Input {...rest} />}
      </div>
    </>
  );
}
