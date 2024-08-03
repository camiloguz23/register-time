import style from './header.module.css';

interface PropHeader {
  children: React.ReactNode;
  className?: string;
}

export const Header = ({ children, className }: PropHeader): JSX.Element => (
  <header className={`${style.header} ${className}`}>{children}</header>
);
