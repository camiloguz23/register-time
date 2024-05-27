'use client';

import { updateMonthAction } from '@/actions';
import { useBoolean, useLocalStorage } from '@/hook';
import { CodeMonthType, editMonth, editYear } from '@/shared';
import { differenceInMinutes } from 'date-fns';
import { useEffect } from 'react';
import style from './btn-register.module.css';
import { Icons, notificationsPopUp, Spinner } from '@/components';

interface PropsBtnRegister {
  id: string;
  minutesDB: number;
  yearTime: number;
  year: number;
}

export const BtnRegister = ({ id, minutesDB, year, yearTime }: PropsBtnRegister): JSX.Element => {
  const storage = useLocalStorage();
  const spinner = useBoolean();
  const month = new Date().getMonth();

  useEffect(() => {
    storage.getStorage('time');
  }, []);

  const onRegisterTime = async (): Promise<JSX.Element | void> => {
    if (!storage.value) {
      storage.setStorage('time', `${new Date()}`);
      return;
    }
    spinner.onTrue();
    const result = differenceInMinutes(new Date(), new Date(storage.value));
    const setMonth = editMonth(result + minutesDB)[month as CodeMonthType];
    const isSaved = await updateMonthAction(id, setMonth, editYear(year, result + yearTime));
    spinner.onFalse();
    storage.setStorage('time', '');
    isSaved
      ? notificationsPopUp({ message: 'Se registro el Tiempo', isSuccess: true })
      : notificationsPopUp({
          message: result >= 1 ? 'No se registro el tiempo' : 'tiempo es inferior al minuto no se registra',
          isSuccess: false
        });
  };
  return (
    <>
      <button onClick={onRegisterTime} className={`${style.button} ${style[storage.value ? 'endRegister' : 'startRegister']}`}>
        <Icons.time type={storage.value ? 'close' : 'add'} />
        {storage.value ? 'detener tiempo' : 'iniciar tiempo'}
      </button>
      {spinner.value && <Spinner />}
    </>
  );
};
