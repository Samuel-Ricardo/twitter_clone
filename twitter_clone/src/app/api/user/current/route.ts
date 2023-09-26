import 'reflect-metadata';

import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';
import { MODULES } from '@/app/modules/app.factory';

export async function GET(req: NextRequest) {
  const session = await getServerSession(MODULES.AUTH.NEXT.OPTIONS());

  if (!session?.user?.email) {
    return NextResponse.json({
      error: 'User not signed in',
    });
  }

  const currentUser = MODULES.GATEWAY.AXIOS.USER().selectByEmail({
    email: session.user.email,
  });

  if (!currentUser) {
    return NextResponse.json({
      error: 'User not found',
    });
  }

  return NextResponse.json({
    user: currentUser,
  });
}
