'use server';

import { mongodbConnect, timeModel } from '@/database';
import { LoginModel, TimeRegister } from '@/shared';
import { cookies } from 'next/headers';

export const onLogin = async (data: LoginModel) => {
  await mongodbConnect();
  const response: TimeRegister | null = await timeModel.findOne(data);
  !!response?.email && cookies().set('email', response?.email ?? '');
  return response?.email;
};

export const onLogOut = async () => {
  await cookies().set('email', '');
  return
};
