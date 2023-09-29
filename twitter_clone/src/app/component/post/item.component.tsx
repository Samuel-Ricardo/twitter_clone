import { IPostItemProps } from '@/app/@types/props/post/item';
import { useHasLiked } from '@/app/hooks/like/has_liked.hook';
import { useTweetLikes } from '@/app/hooks/like/post.hook';
import { useLike } from '@/app/hooks/like/post/mutate/create.hook';
import { useDislike } from '@/app/hooks/like/post/mutate/delete.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar } from '../user/avatar.component';
import Image from 'next/image';
import { useUser } from '@/app/hooks/user/one.hook';
import { PostItemContainer } from './item/container.component';
import { PostItemHeader } from './item/header.component';

export const PostItem = ({
  post,
  currentUser,
  onPostClick,
  onLikeClick,
}: IPostItemProps) => {
  const { data: fetchLikes, mutate: syncLikes } = useTweetLikes({
    likedId: post.id,
  });
  const likes = useMemo(() => fetchLikes, [fetchLikes]);
  const { giveLike } = useLike();
  const { dislike } = useDislike();
  const { data } = useUser({ id: post.authorId });
  const author = useMemo(() => data?.user, [data]);

  const { hasLiked } = useHasLiked({
    likedId: post.id,
    userId: currentUser?.id,
  });

  console.log({ post, author, currentUser, likes });

  const router = useRouter();

  const goToPost = useCallback(
    (event: React.MouseEvent<any>) => {
      event.stopPropagation();

      if (onPostClick) onPostClick(event);

      router.push(`/post/${post.id}`);
    },
    [router, post.id, onPostClick],
  );

  const toggleLike = useCallback(() => {
    if (!currentUser) return;

    hasLiked()
      ? dislike({ id: post.id })
      : giveLike({ userId: currentUser.id, likedId: post.id });

    syncLikes();
  }, [hasLiked, dislike, giveLike, currentUser, post.id, syncLikes]);

  const handleLike = useCallback(
    (event: React.MouseEvent<any>) => {
      event.stopPropagation();

      if (onLikeClick) onLikeClick(event);

      toggleLike();
    },
    [onLikeClick, toggleLike],
  );

  const createdAt = useMemo(
    () =>
      post?.createdAt && formatDistanceToNowStrict(new Date(post?.createdAt)),
    [post],
  );

  return (
    <PostItemContainer onClick={goToPost}>
      <Avatar userId={author?.id} image={author?.profileImage} />
      <div>
        <PostItemHeader user={author} createdAt={createdAt} />
        <div>{post?.body}</div>
        {post?.image && <Image src={post?.image} alt="post image" />}
        <div>
          <AiOutlineMessage size={20} />
          <p>comments count</p>
        </div>
        <div onClick={handleLike}>
          {hasLiked() ? (
            <AiFillHeart size={20} color="red" />
          ) : (
            <AiOutlineHeart size={20} />
          )}
          <p>{likes?.length}</p>
        </div>
      </div>
    </PostItemContainer>
  );
};
