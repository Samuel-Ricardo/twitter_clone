import { INotificationDTO } from '@/app/modules/@core/notification/DTO';
import { LIKE } from '@/app/modules/@core/notification/entity';
import { NotificationItem } from './item.component';

export const NotificationFeed = () => {
  const notifications: INotificationDTO[] = [
    {
      id: '1',
      type: LIKE,
      body: 'Liked your tweet',
      userId: '1',
      eventId: '1',
      createdAt: new Date(),
      updatedAt: new Date(),
      visualizedAt: new Date(),
    },
  ];

  return (
    <div className="flex flex-col flex-1 mt-4 gap-6">
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
      {notifications.map((notification) => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
};
