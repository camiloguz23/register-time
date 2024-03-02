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
      nombre: ''
    }
  });
  const onSubmit = handleSubmit(async (data) => {
    console.log('🚀 ~ onSubmit ~ data:', data);
    await onLogin(data);
  });
  return (
    <form onSubmit={onSubmit}>
      <UiInput
        type='text'
        register={{
          ...register('nombre', {
            required: {
              value: true,
              message: 'El correo es obligatorio'
            }
          })
        }}
        messages={errors?.nombre?.message}
      />
      <button type='submit' disabled={!isValid}>
        Enviar
      </button>
    </form>
  );
};
