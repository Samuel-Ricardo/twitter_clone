import { AuthOptions } from 'next-auth';
import CredetialProvider from 'next-auth/providers/credentials';
import { ENV } from '../../config/env/app.env';
import { interfaces } from 'inversify';
import { MODULE } from '../../app.registry';
import { UserController } from '../../@core/user/controller';

export const authOptions = ({ container }: interfaces.Context): AuthOptions => {
  const USER = container.get<UserController>(MODULE.USER.MAIN);

  return {
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

          const result = await USER.selectByCredentials({
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
};

//export const NEXT_AUTH_HANDLER = NextAuth(authOptions);
