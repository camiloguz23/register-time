'use client';

import { updateMonthAction } from '@/actions';
import { useLocalStorage } from '@/hook';
import { CodeMonthType, editMonth } from '@/shared';
import { differenceInMinutes } from 'date-fns';
import { useEffect } from 'react';
import style from './btn-register.module.css';
import { Icons } from '@/components';

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
      const result = differenceInMinutes(new Date(), new Date(storage.value));
      const month = new Date().getMonth();
      storage.setStorage('time', '');
      const setMonth = editMonth(result + minutesDB)[month as CodeMonthType];
      const isvalid = await updateMonthAction(id, setMonth);
      console.log("🚀 ~ onRegisterTime ~ isvalid:", isvalid)
      
      return;
    }
    storage.setStorage('time', `${new Date()}`);
  };
  return (
    <button onClick={onRegisterTime} className={style.button}>
      <Icons.time type={storage.value ? 'close' : 'add'} />
      {storage.value ? 'detener tiempo' : 'iniciar tiempo'}
    </button>
  );
};
