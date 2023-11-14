import { Header } from '../component/header.component';
import { TweetFeed } from '../component/post/feed.component';
import { SubmitTweet } from '../component/submit/post/submit.component';

export const HomePage = () => (
  <div className="flex flex-col gap-4 w-full h-full">
    <Header label="Home" />
    <SubmitTweet />
    <TweetFeed />
  </div>
);
