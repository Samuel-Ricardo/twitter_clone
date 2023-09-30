'use client';

import { CommentFeed } from '@/app/component/comment/feed.component';
import { IPostDetailsPageProps } from '@/app/@types/props/page/post/details';
import { usePost } from '@/app/hooks/post/one.hook';
import { PostItem } from '@/app/component/post/item.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { useParams } from 'next/navigation';
import { Header } from '@/app/component/header.component';

export const PostDetailsPage = ({}: IPostDetailsPageProps) => {
  const { currentUser } = useCurrentUser();
  const { id } = useParams();
  const { post } = usePost({ id: id as string });

  return (
    <div className="flex flex-col gap-3 flex-1 mt-auto mr-2">
      <Header label={`Tweet`} />
      <PostItem post={post} currentUser={currentUser} fitScreen />
      <CommentFeed />
    </div>
  );
};