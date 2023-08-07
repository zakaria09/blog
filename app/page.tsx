import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="bg-red-900 h-36 text-3xl font-bold underline">Hello</h1>
    </main>
  );
}
