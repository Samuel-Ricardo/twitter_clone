import { MODULES } from '@/app/modules';

export const useNotificationEvents = () => {
  return {
    notification: MODULES.NOTIFICATION.REACTIVE(),
  };
};
