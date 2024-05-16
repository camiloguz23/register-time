'use client';

import { onLogOut } from '@/actions';
import { Icons } from '..';
import style from './btn-logout.module.css';
import { useRouter } from 'next/navigation';

export const BtnLogout = (): JSX.Element => {
  const route = useRouter();
  return (
    <>
      <button
        onClick={async () => {
          await onLogOut();
          route.push('/');
        }}
        className={style['btn-logout']}
      >
        <Icons.LogOut />
      </button>
    </>
  );
};
