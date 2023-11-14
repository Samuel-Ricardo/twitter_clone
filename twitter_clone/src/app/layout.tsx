import 'reflect-metadata';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { BaseLayout } from './page/layout/base.layout';
import { Sidebar } from './component/section/sidebar/sidebar.component';
import { FollowBar } from './component/section/followbar/followbar.component';
import { NotificationModule } from './component/notification/module.component';
import { Suspense } from 'react';
import Loading from './loading';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BaseLayout>
          {/* <div className="fixed left-0 top-0 h-screen w-fit"> */}
          <Sidebar />
          {/* </div> */}

          {/* <div className="h-full ml-[18vw] w-full mr-[30vw] z-50"> */}
          <NotificationModule />
          <Suspense fallback={<Loading />}>{children}</Suspense>
          {/* </div> */}
          {/* <div className="fixed right-0 top-0 h-screen w-fit"> */}
          <FollowBar />
          {/* </div>  */}
        </BaseLayout>
      </body>
    </html>
  );
}
