import { Metadata } from 'next';
import { getUser } from '../services/get-user';
import { cookies } from 'next/headers';
import { BtnRegister, InfoPredications } from './components';
import { CodeMonthType, MONTH, formatHoursMinutes } from '@/shared';
import style from './register-page.module.css';

export const metadata: Metadata = {
  title: 'Register Time'
};

export default async function PageRegiste() {
  const cookie = cookies();
  const email = cookie.get('email');
  const user = await getUser(email?.value ?? '');
  const month: CodeMonthType = new Date().getMonth() as CodeMonthType;
  return (
    <main className={style.registerContainer}>
      <div className={style.container}>
        <InfoPredications month={MONTH[month]} time={formatHoursMinutes(user?.tiempo.meses[MONTH[month]] ?? 0)} />
      </div>
      <BtnRegister id={user?._id ?? ''} minutesDB={user?.tiempo.meses[MONTH[month]] ?? 0} user={user}/>
    </main>
  );
}
