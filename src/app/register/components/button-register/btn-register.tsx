'use client';

import { updateMonthAction } from '@/actions';
import { useBoolean, useLocalStorage } from '@/hook';
import { CodeMonthType, editMonth, editYear } from '@/shared';
import { differenceInMinutes } from 'date-fns';
import { useEffect } from 'react';
import style from './btn-register.module.css';
import { Icons, Spinner, UiNotifications } from '@/components';
import { toast } from 'sonner';

interface PropsBtnRegister {
  id: string;
  minutesDB: number;
  yearTime: number;
  year: number;
}

export const BtnRegister = ({ id, minutesDB, year, yearTime }: PropsBtnRegister) => {
  const storage = useLocalStorage();
  const spinner = useBoolean();
  const month = new Date().getMonth();

  useEffect(() => {
    storage.getStorage('time');
  }, []);

  const onRegisterTime = async () => {
    if (!storage.value) {
      storage.setStorage('time', `${new Date()}`);
      return;
    }
    spinner.onTrue();
    const result = differenceInMinutes(new Date(), new Date(storage.value));
    const setMonth = editMonth(result + minutesDB)[month as CodeMonthType];
    const isSaved = await updateMonthAction(id, setMonth, editYear(year,result + yearTime,));
    spinner.onFalse();
    storage.setStorage('time', '');
    isSaved
      ? toast.success(<UiNotifications message='Se registro el Tiempo' type='success' />, {
          style: { backgroundColor: 'hsla(120,50%,50%,1)' }
        })
      : toast.error(
          <UiNotifications
            message={result >= 1 ? 'No se registro el tiempo' : 'tiempo es inferior al minuto no se registra'}
            type='error'
          />,
          { style: { backgroundColor: 'hsla(0,50%,50%,1)' } }
        );
  };
  return (
    <>
      <button onClick={onRegisterTime} className={style.button}>
        <Icons.time type={storage.value ? 'close' : 'add'} />
        {storage.value ? 'detener tiempo' : 'iniciar tiempo'}
      </button>
      {spinner.value && <Spinner />}
    </>
  );
};
