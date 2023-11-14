'use client';

import { EditUserModal } from '@/app/component/modal/user/edit.modal';
import { LoginModal } from '@/app/component/modal/user/login.modal';
import { RegisterModal } from '@/app/component/modal/user/register.modal';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'react-hot-toast';

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <SessionProvider>
        <div className="flex flex-1 mb-28 pr-2 lg:pr-0">
          <Toaster position="bottom-center" />
          <LoginModal />
          <RegisterModal />
          <EditUserModal />

          {children}
        </div>
      </SessionProvider>
    </QueryClientProvider>
  );
};
