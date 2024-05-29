'use client';

import { Icons, notificationsPopUp, Spinner, UiInput } from '@/components';
import React from 'react';
import { useForm } from 'react-hook-form';
import styles from './input-time.module.css';
import { CodeMonthType, editMonth, editYear } from '@/shared';
import { updateMonthAction } from '@/actions';
import { useBoolean } from '@/hook';

interface PropsBtnRegister {
  id: string;
  minutesDB: number;
  yearTime: number;
  year: number;
}

export default function UiInputTime({ id, minutesDB, yearTime, year }: PropsBtnRegister): JSX.Element {
  const { register, handleSubmit } = useForm({});
  const month = new Date().getMonth();
  const spinner = useBoolean();

  const onSubmit = handleSubmit(async (data): Promise<void> => {
    const { time } = data;
    const minutes: number = time * 60;
    const setMonth = editMonth(minutes + minutesDB)[month as CodeMonthType];
    const isSaved: boolean = await updateMonthAction(id, setMonth, editYear(year, minutes + yearTime));
    isSaved
      ? notificationsPopUp({ message: 'Se registro el Tiempo', isSuccess: true })
      : notificationsPopUp({
          message: minutes >= 1 ? 'No se registro el tiempo' : 'tiempo es inferior al minuto no se registra',
          isSuccess: false
        });
  });
  return (
    <>
      <form className={styles.formTime} onSubmit={onSubmit}>
        <UiInput placeholder='Ingrese la horas hechas' type='number' name='time' register={register('time')} />
        <button type='submit'>
          <Icons.time type={'add'} />
        </button>
      </form>
      {spinner.value && <Spinner />}
    </>
  );
}
