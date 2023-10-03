'use client';

import { TextArea } from '../../form/input/textarea.component';
import { SubmitIcon } from '../../button/form/submit.component';
import { FormSubmit } from '../submit.component';
import { ImageUpload } from '../../form/input/image/image.component';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import {
  SubmitTweetData,
  SubmitTweetSchema,
} from '@/app/modules/validation/zod/user/submit/tweet.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCreatePost } from '@/app/hooks/post/mutate/create.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { toast } from 'react-hot-toast';
import { usePosts } from '@/app/hooks/post/all.hook';

export const SubmitTweet = () => {
  const { currentUser } = useCurrentUser();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SubmitTweetData>({
    resolver: zodResolver(SubmitTweetSchema),
  });

  const { createAsync } = useCreatePost();
  const { mutate: sync } = usePosts();

  const submit = useCallback(
    () =>
      handleSubmit(async (data) => {
        if (!currentUser)
          return toast.error('You must be logged in to post a tweet');

        await createAsync({
          body: data.body,
          image: (data.image as string) || undefined,
          authorId: currentUser.id,
        });

        sync();
      }),
    [currentUser, createAsync, handleSubmit, sync],
  );

  return (
    <FormSubmit title="What are you think 🙃? " onSubmit={submit()}>
      <TextArea
        hook={{ register: () => register('body') }}
        errors={errors.body}
      />
      <ImageUpload
        label="Tweet Image 🤨📸"
        image={''}
        reactHook={{ registry: () => register('image') }}
        large
        onChange={({ file }) => setValue('image', file)}
        errors={errors.image?.message}
      />
      <SubmitIcon className="mt-4 " />
    </FormSubmit>
  );
};
