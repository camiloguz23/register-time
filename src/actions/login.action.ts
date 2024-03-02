'use server';

import { mongodbConnect, timeModel } from '@/database';
import { LoginModel, TimeRegister } from '@/shared';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const onLogin = async (data: LoginModel) => {
  await mongodbConnect();
  const response: TimeRegister | null = await timeModel.findOne(data);
  cookies().set('email', response?.nombre ?? '');
  !!response?.email && redirect('/register');
  return false;
};
