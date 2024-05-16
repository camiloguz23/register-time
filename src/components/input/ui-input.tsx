import style from './input.module.css';

interface PropInput {
  type: React.HTMLInputTypeAttribute;
  name?: string;
  placeholder?: string;
  register: object;
  messages?: string;
}

export const UiInput = ({ type, name, placeholder, register, messages }: PropInput): JSX.Element => (
  <div className={style.contentInput}>
    <input className={style.input} type={type} name={name} placeholder={placeholder} {...register} />
    <span className={style.error}>{messages}</span>
  </div>
);
