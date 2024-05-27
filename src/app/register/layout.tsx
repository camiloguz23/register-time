import { BtnLogout, Header } from '@/components';
import React from 'react';

interface Props {
  children: React.ReactNode;
}
export default function layout({ children }: Props): JSX.Element {
  return (
    <>
      <Header>
        <BtnLogout />
      </Header>
      {children}
    </>
  );
}
