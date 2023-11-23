'use client';

import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { SidebarTweetButton } from './button/tweet.component';
import { SideBarItem } from './item.component';
import { SidebarLogo } from './logo.component';
import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { useNotifications } from '@/app/hooks/notification/find_by_user.hook';
import { useEffect, useMemo, useState } from 'react';
import { useNotificationEvents } from '@/app/hooks/notification/observable/all.hook';

export const Sidebar = () => {
  const {
    result: { data },
  } = useCurrentUser();

  const { notifications } = useNotifications({ userId: data?.user?.id || '' });
  const { notification } = useNotificationEvents();

  const [hasNotifications, syncNotifications] = useState<boolean>(false);

  notification.onCreate({
    action: (n) => syncNotifications(n.userId === data?.user?.id),
  });

  return (
    <div className="col-span-1 h-screen px-3 md:pr-6 pt-2 mr-2 bg-gradient-to-r from-gray-300/40 to-gray-100/30 rounded-e-lg ">
      <div className="flex flex-col items-end h-full w-fit">
        <div className="space-y-6 lg:w-auto h-full items-center justify-center px-auto">
          <SidebarLogo className="mb-16 mt-2" />

          <SideBarItem icon={BsHouseFill} label="Home" href="/" />
          <SideBarItem
            icon={BsBellFill}
            label="Notifications"
            href="/notifications"
            alert={hasNotifications}
          />
          <SideBarItem
            icon={FaUser}
            label="Profile"
            href={`/users/${data?.user?.id}`}
          />

          {data?.user && (
            <SideBarItem onClick={signOut} icon={BiLogOut} label="Logout" />
          )}
        </div>
        <div className=" self-center mb-10 w-full mx-0 sm:px-3 ">
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};
