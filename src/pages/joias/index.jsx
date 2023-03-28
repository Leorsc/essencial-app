import LayoutJoiasPages from '@/components/LayoutJoiasPages'
import api from '@/services/api'
import Head from 'next/head'

export async function getStaticProps() {
  async function loadJoias() {
    try {
      const response = await api.get('/joias')
      return response.data

    } catch (error) {
      console.log(error)
    }
  }

  const joias = await loadJoias();

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

