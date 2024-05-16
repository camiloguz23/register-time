import { Icons, UiFormLogin } from '@/components';
import style from './login.module.css';
import Link from 'next/link';

function Page(): JSX.Element {
  return (
    <div className={style.login}>
      <Link href={'/'} className={style.close}>
        <Icons.Close />
      </Link>
      <div className={style['content-login']}>
        <UiFormLogin />;
      </div>
    </div>
  );
}

export default Page;
