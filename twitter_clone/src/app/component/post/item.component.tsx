import { IPostItemProps } from '@/app/@types/props/post/item';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { formatDistanceToNowStrict } from 'date-fns';
import { useUser } from '@/app/hooks/user/one.hook';
import { PostItemContainer } from './item/container.component';
import { PostItemHeader } from './item/header.component';
import { PostItemFooter } from './item/footer.component';
import { PostItemContent } from './item/content.component';

export const PostItem = ({
  post,
  currentUser,
  onPostClick,
  onLikeClick,
}: IPostItemProps) => {
  const { data } = useUser({ id: post.authorId });
  const author = useMemo(() => data?.user, [data]);

  console.log({ post, author, currentUser });

  const router = useRouter();

  const goToPost = useCallback(
    (event: React.MouseEvent<any>) => {
      event.stopPropagation();

      if (onPostClick) onPostClick(event);

      router.push(`/post/${post.id}`);
    },
    [router, post.id, onPostClick],
  );

  const createdAt = useMemo(
    () =>
      post?.createdAt && formatDistanceToNowStrict(new Date(post?.createdAt)),
    [post],
  );

  return (
    <PostItemContainer onClick={goToPost}>
      <PostItemHeader user={author} createdAt={createdAt} body={post.body} />

      <PostItemContent body={post.body} image={currentUser?.coverImage} />

      <PostItemFooter
        onLikeClick={onLikeClick}
        postId={post.id}
        currentUserId={currentUser?.id}
      />
    </PostItemContainer>
  );
};
