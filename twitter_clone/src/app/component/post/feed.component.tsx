'use client';

import { usePosts } from '@/app/hooks/post/all.hook';
import { PostItem } from './item.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';

export const PostFeed = () => {
  const { data } = usePosts();
  const {
    result: { data: fetch },
  } = useCurrentUser();

  return (
    <>
      {data &&
        data.posts.map((post) => (
          <PostItem key={post.id} post={post} currentUser={fetch?.user} />
        ))}
    </>
  );
};
