'use client';

import { updateMonthAction } from '@/actions';
import { useLocalStorage } from '@/hook';
import { CodeMonthType, editMonth } from '@/shared';
import { differenceInMinutes } from 'date-fns';
import { useEffect } from 'react';
import style from './btn-register.module.css';
import { Icons } from '@/components';
import { toast } from 'sonner';

interface PropsBtnRegister {
  id: string;
  minutesDB: number;
}

export const BtnRegister = ({ id, minutesDB }: PropsBtnRegister) => {
  const storage = useLocalStorage();

  useEffect(() => {
    storage.getStorage('time');
  }, []);

  const onRegisterTime = async () => {
    if (storage.value) {
      storage.setStorage('time', `${new Date()}`);
      return;
    }

    const result = differenceInMinutes(new Date(), new Date(storage.value));
    const month = new Date().getMonth();
    const setMonth = editMonth(result + minutesDB)[month as CodeMonthType];
    const isSaved = await updateMonthAction(id, setMonth);
    storage.setStorage('time', '');
    isSaved
      ? toast.success('Se registro el Tiempo', { style: { backgroundColor: 'hsla(120,50%,50%,0.4)' } })
      : toast.error('No se registro el tiempo', { style: { backgroundColor: 'hsla(0,50%,50%,0.4)' } });
  };
  return (
    <button onClick={onRegisterTime} className={style.button}>
      <Icons.time type={storage.value ? 'close' : 'add'} />
      {storage.value ? 'detener tiempo' : 'iniciar tiempo'}
    </button>
  );
};
