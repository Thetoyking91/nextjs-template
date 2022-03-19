import Template from '../../public/Template'
import { useRouter } from 'next/router'
import Head from "next/head"
import { Navbar } from '../../public/navbar'
import styles from "../../styles/Home.module.css"
export default function Home() {
  const router = useRouter()
  const { id } = router.query
  return (
    <div>
        <Head>
          <title> Comments for id {id} </title>
          <meta name="description" content="Niblet: the ad-less social media platform" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
          <h1 className={styles.title}>
            Comments for id {id}
          </h1>
          <p>{id}</p>
        </main>
      </div>
  )
}
