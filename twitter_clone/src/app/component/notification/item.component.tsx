import { INotificationItemProps } from '@/app/@types/props/notification/item';
import { SidebarLogo } from '../section/sidebar/logo.component';
import { NotificationItemContainer } from './item/container.component';
import { DeleteNotificationButton } from '../button/notification/delete.button';
import { NotificationItemBody } from './item/body.componen';
import { MODULES } from '@/app/modules';

export const NotificationItem = ({ notification }: INotificationItemProps) => {
  const MODULE = MODULES.NOTIFICATION.MAIN();

  const handleClick = async () =>
    !notification.visualizedAt &&
    MODULE.view({ id: notification.id, visualizedAt: new Date() });

  return (
    <NotificationItemContainer onClick={handleClick}>
      <SidebarLogo />
      <NotificationItemBody
        notification={notification}
        createdAt={new Date(notification.createdAt)}
        visualizedAt={
          notification.visualizedAt
            ? new Date(notification.visualizedAt)
            : undefined
        }
      />
      <DeleteNotificationButton id={notification.id} />
    </NotificationItemContainer>
  );
};
