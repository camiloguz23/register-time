import style from './header.module.css';

interface PropHeader {
  children: React.ReactNode;
}

export const Header = ({ children }: PropHeader) => {
  return <header className={style.header}>{children}</header>;
};
