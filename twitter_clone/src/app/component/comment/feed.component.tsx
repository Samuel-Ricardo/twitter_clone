import { ICommentFeedProps } from '@/app/@types/props/comment/feed';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { CommentItem } from './item.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';

export const CommentFeed = ({ tweetId }: ICommentFeedProps) => {
  const { comments } = useTweetComments({ postId: tweetId });

  comments.push({
    id: '1',
    body: 'test',
    postId: tweetId,
    authorId: useCurrentUser().currentUser?.id || '',
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  return (
    <div className="flex flex-col flex-1 gap-4 mt-10 mb-36">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
