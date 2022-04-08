import Head from 'next/head'
import Image from 'next/image'
import { Component } from 'react'
import styles from '../styles/Home.module.css'
import { Navbar } from './navbar'

export default class Template extends Component {
  render() {
    return (
      <div>
        <Head>
          <title> { this.props.title } </title>
          <meta name="description" content={this.props.desc} />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
          <h1 className={styles.title}>
            {this.props.headText}
          </h1>
          {this.props.children}
        </main>
      </div>
    )
  }
}