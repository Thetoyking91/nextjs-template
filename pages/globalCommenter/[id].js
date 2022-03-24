import Template from '../../public/Template'
import { useRouter } from 'next/router'
import Head from "next/head"
import { Navbar } from '../../public/navbar'
import styles from "../../styles/Home.module.css"
export default function Home() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Template title={`Comments for ${id}`} headText={`Comments for ${id}`} />
  )
}
