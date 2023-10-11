import { MODULES } from '@/app/modules';

export const useNotificationEvents = () => {
  return {
    onCreate: MODULES.NOTIFICATION.REACTIVE().onCreate,
    onView: MODULES.NOTIFICATION.REACTIVE().onView,
    onDelete: MODULES.NOTIFICATION.REACTIVE().onDelete,
  };
};
