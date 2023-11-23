import { IPostItemFooterProps } from '@/app/@types/props/post/item_footer';
import { useTweetComments } from '@/app/hooks/comment/post.hook';
import { AiOutlineMessage } from 'react-icons/ai';
import { LikeButton } from '../../button/like.component';

export const PostItemFooter = ({
  postId,
  onCommentClick,
}: IPostItemFooterProps) => {
  const { comments } = useTweetComments({ postId });

  return (
    <div className="flex flex-row items-center mt-3 gap-10">
      <div
        onClick={onCommentClick}
        className="flex flex-row items-center gap-2 cursor-pointer transition-all hover:scale-105 duration-300 ease-in-out hover:bg-blue-200 hover:rounded-full hover:p-2 "
      >
        <AiOutlineMessage size={28} />
        <p>{comments.length}</p>
      </div>
      <LikeButton likedId={postId} />
    </div>
  );
};
