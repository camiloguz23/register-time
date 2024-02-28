import styles from './page.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <main className={styles.main}>
      <p>style</p>
      <Link href={'/login'}>Login</Link>
    </main>
  );
}
