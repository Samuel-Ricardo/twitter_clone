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
        <div className="flex h-[100vh] w-[100vw]">
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
