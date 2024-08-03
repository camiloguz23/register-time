import React from 'react';
import style from './layout-content.module.css';
import Link from 'next/link';
import { BtnLogout, Header } from '@/components';

interface PropsLayoutContent {
  children: React.ReactNode;
}

export function UiLayoutContent({ children }: PropsLayoutContent): JSX.Element {
  return (
    <main className={style.main}>
      {/* <header className={style.header}>
        <Link href={'/register'}>Registro</Link>
        <Link href={'/counter'}>contador</Link>
        <BtnLogout />
      </header> */}
      <Header className={style.header}>
        <nav className={style.contentLink}>
          <Link href={'/register'}>Registro</Link>
          <Link href={'/counter'}>contador</Link>
        </nav>
        <BtnLogout />
      </Header>
      <div className={style.content}>{children}</div>
    </main>
  );
}
