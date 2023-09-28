'use client';

import { HomePage } from './page/home.page';
import { BaseLayout } from './page/layout/base.layout';

export default function Home() {
  return (
    <BaseLayout>
      <HomePage />
    </BaseLayout>
  );
}
