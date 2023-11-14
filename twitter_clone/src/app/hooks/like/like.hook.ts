import { useHasLiked } from './has_liked.hook';
import { useTweetLikes } from './post.hook';
import { useLike } from './post/mutate/create.hook';
import { useDislike } from './post/mutate/delete.hook';

export const useLikes = () => {
  const tweet = {
    get: useTweetLikes,
    give: useLike,
    remove: useDislike,
  };

  return { tweet, liked: useHasLiked };
};
