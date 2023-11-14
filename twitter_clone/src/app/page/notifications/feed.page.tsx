import 'reflect-metadata';

import { Header } from '@/app/component/header.component';
import { NotificationFeed } from '@/app/component/notification/feed.component';

export const NotificationsPage = () => {
  return (
    <div className="flex flex-1 flex-col">
      <Header label="Notification" />
      <NotificationFeed />
    </div>
  );
};
