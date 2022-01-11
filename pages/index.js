import Head from 'next/head'
import MainHeader from '../components/header/MainHeader';
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="A Portfolio website for Jeffery Diaz" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <header>
        <MainHeader />
      </header>

      <main className>
        <p>Body</p>
      </main>

      <footer className>
        <p>Footer</p>
      </footer>
    </div>
  )
}
