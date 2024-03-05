'use client';

import { onLogOut } from '@/actions';
import { Icons } from '..';
import style from './btn-logout.module.css';

export const BtnLogout = () => {
  return (
    <>
      <button onClick={() => onLogOut()} className={style['btn-logout']}>
        <Icons.LogOut />
      </button>
    </>
  );
};
