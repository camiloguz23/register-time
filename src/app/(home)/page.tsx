import Image from 'next/image';
import styles from './page.module.css';
import Link from 'next/link';
import { Spinner } from '@/components';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Time Register</h1>
      <div className={styles.container}>
        <Image src={'/img/home.png'} className={styles.image} alt='image about register time' width={200} height={200} />
      </div>
     
     <div className={styles['container-btm-link']}>
       <Link href={'/login'} className={styles['btn-link']}>Login</Link>
     </div>
    </main>
  );
}
