import { IUserFeedProps } from '@/app/@types/props/user/feed';
import { useAuthorPost } from '@/app/hooks/post/author.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { PostItem } from '../item.component';

export const UserFeed = (props: IUserFeedProps) => {
  const { currentUser } = useCurrentUser();
  const { posts } = useAuthorPost({ id: props.userId });

  return (
    <div className="flex flex-col gap-3 flex-1 mt-auto mr-2">
      {posts?.map((post) => (
        <PostItem key={post.id} post={post} currentUser={currentUser} />
      ))}
    </div>
  );
};
