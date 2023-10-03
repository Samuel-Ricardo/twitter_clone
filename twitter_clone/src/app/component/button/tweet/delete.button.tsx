import { useDeleteTweet } from '@/app/hooks/post/mutate/delete.hook';
import { DeleteButton } from '../delete.component';
import { usePosts } from '@/app/hooks/post/all.hook';
import { useCallback } from 'react';
import { IDeleteTweetButtonProps } from '@/app/@types/props/post/button/delete';

export const DeleteTweetButton = (props: IDeleteTweetButtonProps) => {
  const { deleteAsync } = useDeleteTweet();
  const { mutate: sync } = usePosts();
  const deleteTweet = useCallback(async () => {
    await deleteAsync({ id: props.id });
    sync();
  }, [deleteAsync, props.id, sync]);
  return <DeleteButton {...props} onClick={deleteTweet} />;
};
