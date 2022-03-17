import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { Navbar } from '../../public/navbar'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Niblet</title>
        <meta name="description" content="Niblet: the ad-less social media platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Comments Portion of Niblet!
        </h1>
      </main>
    </div>
  )
}
