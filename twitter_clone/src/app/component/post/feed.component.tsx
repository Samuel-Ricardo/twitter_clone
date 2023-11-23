'use client';

import { usePosts } from '@/app/hooks/post/all.hook';
import { PostItem } from './item.component';
import { useCurrentUser } from '@/app/hooks/user/current.hook';

//import { io } from 'socket.io-client';

export const TweetFeed = () => {
  const { data } = usePosts();
  const {
    result: { data: fetch },
  } = useCurrentUser();

  //const socket = io('http://localhost:3004');

  //  socket.on('connect', () => {
  //    console.log('connected');
  //  });

  //  socket.emit('HANDSHAKE', { RAPAZ: 'TOMI' });

  return (
    <div className="flex flex-col gap-3 flex-1 mt-auto mr-2">
      {data &&
        data.posts.map((post) => (
          <PostItem key={post.id} post={post} currentUser={fetch?.user} />
        ))}
    </div>
  );
};
