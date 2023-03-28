import { UserProvider } from '@/context/UserContext'
import '@/styles/globals.css'
import Head from 'next/head'

import Layout from './Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="keywords" content="Aneis, Brincos, Colares"></meta>
        <meta name="description" content="Encontre a melhor Joia para você"></meta>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </>
  )
}