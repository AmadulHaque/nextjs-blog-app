import { getIronSession } from 'iron-session';
import { cookies } from 'next/headers';

export const sessionOptions = {
  password: process.env.SECRET_KEY || 'complex_password_at_least_32_characters_long',
  cookieName: 'myapp_session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
};

export const getSession = async () => {
  const cookieStore = cookies();
  return await getIronSession(cookieStore, sessionOptions);
};
