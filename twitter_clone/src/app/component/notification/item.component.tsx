import { INotificationItemProps } from '@/app/@types/props/notification/item';
import { SidebarLogo } from '../section/sidebar/logo.component';
import { NotificationItemContainer } from './item/container.component';
import { DeleteNotificationButton } from '../button/notification/delete.button';
import { NotificationItemBody } from './item/body.componen';

export const NotificationItem = ({ notification }: INotificationItemProps) => {
  return (
    <NotificationItemContainer>
      <SidebarLogo />
      <NotificationItemBody
        body={notification.body}
        createdAt={notification.createdAt}
        visualizedAt={notification.visualizedAt || undefined}
      />
      <DeleteNotificationButton id={notification.id} />
    </NotificationItemContainer>
  );
};
