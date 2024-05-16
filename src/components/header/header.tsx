import style from './header.module.css';

interface PropHeader {
  children: React.ReactNode;
}

export const Header = ({ children }: PropHeader): JSX.Element => <header className={style.header}>{children}</header>;
