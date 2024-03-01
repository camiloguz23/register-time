'use client';

import { useForm } from 'react-hook-form';
import { UiInput } from '../input/ui-input';
import { onLogin } from '@/actions';
import { LoginModel } from '@/shared';

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
    await onLogin(data);
  });
  return (
    <form onSubmit={onSubmit}>
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
      <button type='submit' disabled={!isValid}>
        Enviar
      </button>
    </form>
  );
};
