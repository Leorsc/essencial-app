import LayoutJoiasPages from '@/components/LayoutJoiasPages'
import Head from 'next/head'


export async function getStaticProps() {
  const data = await fetch('http://localhost:3333/joias')

  const joias = await data.json()

  return {
    props: { joias },
  }
}

export default function Joias({ joias }) {

  return (
    <>
      <Head>
        <title>Essencial Semi Joias</title>
      </Head>
      <LayoutJoiasPages joias={joias} />
    </>

  )
}

