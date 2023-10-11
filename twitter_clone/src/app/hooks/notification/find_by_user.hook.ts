import { MODULES } from '@/app/modules';
import { IFindNotificationsByUserDTO } from '@/app/modules/@core/notification/DTO';
import { useMemo } from 'react';

export const useNotifications = (user: IFindNotificationsByUserDTO) => {
  const result = MODULES.NOTIFICATION.MAIN().findByUser(user).notifications;
  const notifications = useMemo(
    () => result.data?.notifications,
    [result.data],
  );
  return { ...result, notifications };
};
