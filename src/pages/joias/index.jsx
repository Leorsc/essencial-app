import Link from "next/link"
import Head from 'next/head'

export async function getStaticProps() {
  const data = await fetch('http://localhost:3333/categorias')

  const categorias = await data.json()

  return {
    props: { categorias },
  }
}

export default function Joias({ categorias }) {

  return (
    <>
      <Head>
        <title>Essencial Semi Joias</title>
      </Head>
      <div>
        <h1>Joias</h1>
        {
          categorias.map((categoria) => (
            <div key={categoria.id}>
              <Link href={`/joias/${categoria.descricao}`}>{categoria.descricao}</Link>
            </div>
          ))
        }
      </div>
    </>

  )
}
