import { getUser } from '@/services';
import { CodeMonthType, MONTH, zonedDate } from '@/shared';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import React from 'react';

export const metadata: Metadata = {
  title: 'History Page'
};

export default async function HistoryPage(): Promise<JSX.Element> {
  const cookie = cookies();
  const email = cookie.get('email');
  const user = await getUser(email?.value ?? '');
  const month: CodeMonthType = zonedDate();

  const setMoth = (): CodeMonthType => (month === 0 ? 11 : month - 1) as CodeMonthType;

  return (
    <div style={{ paddingLeft: '20px' }}>
      <p>
        <b>Mes:</b> {MONTH[setMoth()]} {user?.tiempo.meses[MONTH[month]] ?? 0}
      </p>
    </div>
  );
}
