'use client';

import { useCurrentUser } from '@/app/hooks/user/current.hook';
import { SidebarTweetButton } from './button/tweet.component';
import { SideBarItem } from './item.component';
import { SidebarLogo } from './logo.component';
import { signOut } from 'next-auth/react';
import { BiLogOut } from 'react-icons/bi';
import { BsBellFill, BsHouseFill } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';

export const Sidebar = () => {
  const {
    result: { data },
  } = useCurrentUser();

  return (
    <div className="col-span-1 h-full px-4 md:pr-6 pt-2">
      <div className="flex flex-col items-end h-full">
        <div className="space-y-6 lg:w-auto h-full items-center justify-center px-auto">
          <SidebarLogo className="mb-16" />

          <SideBarItem icon={BsHouseFill} label="Home" href="/" />
          <SideBarItem
            icon={BsBellFill}
            label="Notifications"
            href="/notifications"
          />
          <SideBarItem
            icon={FaUser}
            label="Profile"
            href={`/users/${data?.user?.id}`}
          />

          {data?.user && (
            <SideBarItem onClick={signOut} icon={BiLogOut} label="Logout" />
          )}
          <div className="w-auto pt-[100%] mx-4">
            <SidebarTweetButton />
          </div>
        </div>
      </div>
    </div>
  );
};
