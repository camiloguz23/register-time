import { Metadata } from 'next';
import { getUser } from '../services/get-user';
import { cookies } from 'next/headers';
import { BtnRegister, InfoPredications } from './components';
import { CodeMonthType, MONTH, formatHoursMinutes } from '@/shared';
import style from './register-page.module.css';
import { BarProgress, BtnLogout, Header } from '@/components';

export const metadata: Metadata = {
  title: 'Register Time'
};

export default async function PageRegiste() {
  const cookie = cookies();
  const email = cookie.get('email');
  const user = await getUser(email?.value ?? '');
  const month: CodeMonthType = new Date().getMonth() as CodeMonthType;
  const year = new Date().getFullYear();
  return (
    <main className={style.registerContainer}>
      <Header>
        <BtnLogout />
      </Header>
      <div className={style.container}>
        <InfoPredications month={MONTH[month]} time={formatHoursMinutes(user?.tiempo.meses[MONTH[month]] ?? 0)} />
        <section className={style['section-precursorado']}>
          <h3>Precursorados</h3>
          <BarProgress
            max={15}
            value={formatHoursMinutes(user?.tiempo.meses[MONTH[month]] ?? 0).hours}
            title='Precusorado Auxiliar (Campaña)'
            color='naranja'
          />
          <BarProgress
            max={30}
            value={formatHoursMinutes(user?.tiempo.meses[MONTH[month]] ?? 0).hours}
            title='Precusorado Auxiliar'
            color='azul'
          />
          <BarProgress
            max={50}
            value={formatHoursMinutes(user?.tiempo.meses[MONTH[month]] ?? 0).hours}
            title='Precursorado Regular'
            color='verde'
          />
        </section>
      </div>
      <BtnRegister
        id={user?._id ?? ''}
        minutesDB={user?.tiempo.meses[MONTH[month]] ?? 0}
        yearTime={user?.tiempo?.year?.[`${year}`] ?? 0}
        year={year}
      />
    </main>
  );
}
