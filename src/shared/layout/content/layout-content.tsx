import React from 'react';
import style from './layout-content.module.css';
import { BtnLogout, Header } from '@/components';
import { Link } from 'next-view-transitions';

interface PropsLayoutContent {
  children: React.ReactNode;
}

export function UiLayoutContent({ children }: PropsLayoutContent): JSX.Element {
  return (
    <main className={style.main}>
      <Header className={style.header}>
        <nav className={style.contentLink}>
          <Link href={'/register'}>Registro</Link>
          <Link href={'/counter'}>contador</Link>
          <Link href={'/history'}>Historial</Link>
        </nav>
        <BtnLogout />
      </Header>
      <div className={style.content}>{children}</div>
    </main>
  );
}
