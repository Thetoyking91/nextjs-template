import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import { Navbar } from '../../public/navbar'
import Template from '../../public/Template'
export default function Home() {
  return (
    <div>
      <Head>
        <title> Niblet Global Commenter </title>
        <meta name="description" content="Niblet: the ad-less social media platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Global Commenter!
        </h1>
      </main>
    </div>
  )
}
