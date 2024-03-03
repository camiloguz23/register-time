'use client';

import { useForm } from 'react-hook-form';
import { UiInput } from '../input/ui-input';
import { onLogin } from '@/actions';
import { LoginModel } from '@/shared';
import { toast } from 'sonner';
import style from './ui-form.module.css';

export const UiFormLogin = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit
  } = useForm<LoginModel>({
    mode: 'onBlur',
    defaultValues: {
      email: ''
    }
  });

  const onSubmit = handleSubmit(async (data) => {
    const isSession = await onLogin(data);

    isSession === false && toast.error('My error toast', { style: { backgroundColor: 'hsla(0,50%,50%,0.4)' } });
  });
  return (
    <form onSubmit={onSubmit} className={style.form}>
      <h4  className={style.title}>Iniciar Sesion</h4>
      <UiInput
        type='email'
        register={{
          ...register('email', {
            required: {
              value: true,
              message: 'El correo es obligatorio'
            }
          })
        }}
        messages={errors?.email?.message}
      />
      <button type='submit' disabled={!isValid} className={style['btn-login']}>
        Enviar
      </button>
    </form>
  );
};
