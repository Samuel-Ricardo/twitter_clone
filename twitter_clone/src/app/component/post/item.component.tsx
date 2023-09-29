import { IPostItemProps } from '@/app/@types/props/post/item';
import { useHasLiked } from '@/app/hooks/like/has_liked.hook';
import { useTweetLikes } from '@/app/hooks/like/post.hook';
import { useLike } from '@/app/hooks/like/post/mutate/create.hook';
import { useDislike } from '@/app/hooks/like/post/mutate/delete.hook';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
import { formatDistanceToNowStrict } from 'date-fns';
import { Avatar } from '../user/avatar.component';
import Image from 'next/image';
import { useUser } from '@/app/hooks/user/one.hook';
import { PostItemContainer } from './item/container.component';
import { PostItemHeader } from './item/header.component';
import { PostItemFooter } from './item/footer.component';

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
      <div className="flex flex-row items-start gap-3">
        <div className="min-w-fit">
          <Avatar userId={author?.id} image={author?.profileImage} />
        </div>
        <div>
          <PostItemHeader user={author} createdAt={createdAt} />

          <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] p-2 rounded-md overflow-clip break-all hidden md:block ">
            {post?.body +
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
          </div>
        </div>
      </div>

      <div className="my-4 mx-2 bg-[rgba(255,255,255,0.35)] p-2 rounded-md overflow-clip break-all md:hidden ">
        {post?.body +
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
      </div>

      {post.image ||
        (true && (
          <Image
            src={currentUser?.coverImage || '/user/images/placeholder.png'}
            alt="post image"
            width={1080}
            height={1920}
            className=" mx-5 w-auto max-w-full h-full max-h-[50vh]  rounded-md"
          />
        ))}
      <PostItemFooter
        onLikeClick={onLikeClick}
        postId={post.id}
        currentUserId={currentUser?.id}
      />
    </PostItemContainer>
  );
};
