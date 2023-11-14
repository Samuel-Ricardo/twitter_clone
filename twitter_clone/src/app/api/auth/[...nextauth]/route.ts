import { MODULES } from '@/app/modules';
import NextAuth from 'next-auth';

const handler = NextAuth(MODULES.AUTH.NEXT.OPTIONS());

export { handler as GET, handler as POST };
