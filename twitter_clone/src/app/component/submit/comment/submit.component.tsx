import { useCreatePost } from '@/app/hooks/post/mutate/create.hook';
import { FormSubmit } from '../submit.component';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { ISubmitCommentProps } from '@/app/@types/props/comment/submit';
import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { Input } from '../../input.component';
import { TextArea } from '../../form/input/textarea.component';
import { ImageUpload } from '../../form/input/image/image.component';
import { SubmitIcon } from '../../form/submit.icon';
import { BiExit } from 'react-icons/bi';
import {
  SubmitCommentData,
  SubmitCommentSchema,
} from '@/app/modules/validation/zod/user/comment.validation';
import { zodResolver } from '@hookform/resolvers/zod';

export const SubmitComment = ({ tweetId: id }: ISubmitCommentProps) => {
  const { createAsync } = useCreatePost();
  const { mutate } = useTweetComments({ postId: id });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitCommentData>({
    resolver: zodResolver(SubmitCommentSchema),
  });

  const submitRef = useRef<HTMLInputElement>(null);

  return (
    <FormSubmit
      title="Type your reply"
      onSubmit={handleSubmit((data) => console.log({ data }))}
    >
      <TextArea
        hook={{ register: () => register('body') }}
        errors={errors.body}
      />

      <BiExit
        size={28}
        onClick={() => submitRef.current?.click()}
        className="text-black self-end mr-4 cursor-pointer transition hover:text-cyan-300 hover:scale-105"
      />

      <input type="submit" ref={submitRef} hidden />
    </FormSubmit>
  );
};
