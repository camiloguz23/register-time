'use server';

import { mongodbConnect, timeModel } from '@/database';
import { LoginModel, TimeRegister } from '@/shared';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const onLogin = async (data: LoginModel):Promise<boolean> => {
  await mongodbConnect();
  const response: TimeRegister | null = await timeModel.findOne(data);
  !!response?.email && cookies().set('email', response?.email ?? '');
  return response?.email ? redirect('/register') : false;
};

export const onLogOut = async (): Promise<void> => {
  await cookies().set('email', '');
  return;
};
