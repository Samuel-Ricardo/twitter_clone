'use client';

import { useNotifications } from '@/app/hooks/notification/find_by_user.hook';
import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { NotificationItem } from './item.component';
import { useNotificationEvents } from '@/app/hooks/notification/observable/all.hook';
import { compareDesc } from 'date-fns';
import { NotLogged } from '../not_logged.component';

export const NotificationFeed = () => {
  const { currentUser } = useCurrentUser();
  const { notifications, mutate: sync } = useNotifications({
    userId: currentUser?.id || '',
  });
  const { notification: event } = useNotificationEvents();

  event.onView({ action: () => sync() });

  event.onCreate({
    action: (notification) => {
      notifications?.push(notification);
      notifications?.sort((a, b) =>
        compareDesc(new Date(a.createdAt), new Date(b.createdAt)),
      );

      sync(notifications);
    },
  });

  event.onDelete({
    action: (notification) =>
      sync(notifications?.filter((n) => n.id !== notification.id)),
  });

  if (!currentUser)
    return (
      <div className="mt-4">
        <NotLogged />
      </div>
    );

  return (
    <div className="flex flex-col flex-1 mt-4 gap-6">
      {notifications?.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};
