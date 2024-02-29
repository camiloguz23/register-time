'use server';

import { mongodbConnect, timeModel } from '@/database';
import { TimeRegister } from '@/types';
import { LoginModel } from '@/types/login-model';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const onLogin = async (data: LoginModel) => {
  await mongodbConnect();
  const response: TimeRegister | null = await timeModel.findOne(data);
  cookies().set('email', JSON.stringify(response?.email ?? ''));
  !!response?.email && redirect('/register');
  console.log(response);
  return false;
};
