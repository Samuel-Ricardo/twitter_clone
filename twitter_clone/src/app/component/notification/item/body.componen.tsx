import { INotificationItemBodyProps } from '@/app/@types/props/notification/item_body';
import { FOLLOW, POST } from '@/app/modules/@core/notification/entity';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import { BsCheck2All } from 'react-icons/bs';

export const NotificationItemBody = ({
  notification,
  createdAt,
  visualizedAt,
}: INotificationItemBodyProps) => {
  const { push: goTo } = useRouter();

  const date = useMemo(
    () =>
      createdAt ? format(visualizedAt || createdAt, 'MMM d - h:mm a') : '',
    [createdAt, visualizedAt],
  );

  return (
    <div onClick={onClick} className="flex flex-1">
      <p className="truncate">{notification?.body}</p>

      <div className="flex flex-row gap-2 flex-1 items-end justify-end -mb-8">
        <p className="text-neutral-400 text-sm">{date}</p>
        <BsCheck2All
          size={24}
          className={`self-end ${
            visualizedAt ? 'text-cyan-300' : 'text-gray-400'
          }`}
        />
      </div>
    </div>
  );
};
