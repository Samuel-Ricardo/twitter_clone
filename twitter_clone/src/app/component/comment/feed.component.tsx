import { ICommentFeedProps } from '@/app/@types/props/comment/feed';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { CommentItem } from './item.component';

export const CommentFeed = ({ tweetId }: ICommentFeedProps) => {
  const { comments } = useTweetComments({ postId: tweetId });

  return (
    <div className="flex flex-col flex-1 gap-4 mt-10 mb-36">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
