import { IDeleteCommentButtonProps } from '@/app/@types/props/comment/button/delete';
import { DeleteButton } from '../delete.component';
import { useDeleteComment } from '@/app/hooks/comment/mutate/delete.hook';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { useCallback } from 'react';

export const DeleteCommentButton = (props: IDeleteCommentButtonProps) => {
  const { deleteAsync } = useDeleteComment();
  const { mutate: sync } = useTweetComments({ postId: props.tweet });
  const deleteComment = useCallback(async () => {
    await deleteAsync({ id: props.id });
    sync();
  }, [deleteAsync, props.id, sync]);
  return <DeleteButton onClick={deleteComment} {...props} />;
};
