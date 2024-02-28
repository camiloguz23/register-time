import style from './modal.module.css';

interface PropModal {
  children: React.ReactNode;
}

export const UiModal = ({ children }: PropModal) => {
  return <div className={style.modal}>{children}</div>;
};
