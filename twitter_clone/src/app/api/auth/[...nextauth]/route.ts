import { MODULES } from '@/app/modules';
import { ENV } from '@/app/modules/config/env/app.env';
import NextAuth, { AuthOptions } from 'next-auth';
import CredetialProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  providers: [
    CredetialProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password)
          throw new Error('Invalid credentials');

        const result = await MODULES.USER.MAIN().selectByCredentials({
          email: credentials.email,
          password: credentials.password,
        });

        if (!result) throw new Error('Invalid credentials');

        return result.user;
      },
    }),
  ],
  debug: ENV.NODE_ENV === 'development',
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: ENV.JWT.SECRET,
  },
  secret: ENV.NEXT.AUTH.SECRET,
};

export default NextAuth(authOptions);
