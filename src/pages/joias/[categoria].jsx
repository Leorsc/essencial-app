import LayoutJoiasPages from "@/components/LayoutJoiasPages"
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`http://localhost:3333/joias/${params.categoria}`)

  const joiasCategoria = await data.json()
  return {
    props: {
      joiasCategoria
    }
  }
}

export async function getStaticPaths() {

  const response = await fetch('http://localhost:3333/categorias')

  const data = await response.json()

  const paths = data.map((categoria) => {
    return {
      params: {
        categoria: `${categoria.descricao}`
      }
    }
  })

  return {
    paths,
    fallback: true
  }
}


export default function JoiasCategoria({ joiasCategoria }) {
  const router = useRouter()
  const { categoria } = router.query
  const categoriaName = categoria
  const categoriaNameCapitalized = categoriaName ? categoriaName.charAt(0).toUpperCase() + categoriaName.slice(1) : 'Joias'
  const pageTitle = categoriaNameCapitalized + ' | ' + 'Essencial'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      {
        joiasCategoria ?
          <LayoutJoiasPages joias={joiasCategoria} />
          :
          //TODO criar uma página de loading
          <h1>Loading...</h1>
      }
    </>

  )
}