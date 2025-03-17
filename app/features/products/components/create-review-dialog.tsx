import { StarIcon } from 'lucide-react';
import { useState } from 'react';
import { Form } from 'react-router';
import InputPair from '~/common/components/input-pair';
import { Button } from '~/common/components/ui/button';
import {
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/common/components/ui/dialog';
import { DialogContent } from '~/common/components/ui/dialog';
import { DialogDescription } from '~/common/components/ui/dialog';
import { Label } from '~/common/components/ui/label';

export default function CreateReviewDialog() {
  const [rating, setRating] = useState<number>(0);
  const [hoverStar, setHoverStar] = useState<number>(0);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl">Are you absolutely sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </DialogDescription>
      </DialogHeader>

      <Form className="space-y-10">
        <div>
          <Label className="flex flex-col gap-1">
            Rating
            <small className="text-muted-foreground">
              What would you rate this product?
            </small>
          </Label>
          <div className="flex gap-2 mt-5">
            {[1, 2, 3, 4, 5].map((star) => (
              <label
                key={star}
                className="relative"
                onMouseEnter={() => setHoverStar(star)}
                onMouseLeave={() => setHoverStar(0)}
              >
                <StarIcon
                  className="size-5 text-yellow-400"
                  fill={
                    hoverStar >= star || rating >= star
                      ? 'currentColor'
                      : 'none'
                  }
                />
                <input
                  type="radio"
                  value="star"
                  name="rating"
                  required
                  className="opacity-0 h-px w-px absolute"
                  onChange={() => setRating(star)}
                />
              </label>
            ))}
          </div>
        </div>

        <InputPair
          textArea
          required
          label="Review"
          description="Maximun 1000 characters"
          placeholder="Tell us more about your experience with this product."
        />
        <DialogFooter>
          <Button type="submit">Save</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  );
}
