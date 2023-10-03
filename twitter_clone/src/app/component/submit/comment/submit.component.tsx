import { FormSubmit } from '../submit.component';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { ISubmitCommentProps } from '@/app/@types/props/comment/submit';
import { useForm } from 'react-hook-form';
import { TextArea } from '../../form/input/textarea.component';
import {
  SubmitCommentData,
  SubmitCommentSchema,
} from '@/app/modules/validation/zod/user/submit/comment.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreateComment } from '@/app/hooks/comment/mutate/create.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { toast } from 'react-hot-toast';
import { SubmitIcon } from '../../button/form/submit.component';

export const SubmitComment = ({ tweetId: id }: ISubmitCommentProps) => {
  const { createAsync } = useCreateComment();
  const { mutate: sync } = useTweetComments({ postId: id });
  const { currentUser } = useCurrentUser();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<SubmitCommentData>({
    resolver: zodResolver(SubmitCommentSchema),
  });

  const submit = handleSubmit(async (data) => {
    if (!currentUser)
      return toast.error('You must be logged in to comment on a tweet');

    await createAsync({
      authorId: currentUser.id,
      postId: id,
      body: data.body,
    });

    sync();
  });

  return (
    <FormSubmit title="Type your reply" onSubmit={submit}>
      <TextArea
        hook={{ register: () => register('body') }}
        errors={errors.body}
      />

      <SubmitIcon />
    </FormSubmit>
  );
};
