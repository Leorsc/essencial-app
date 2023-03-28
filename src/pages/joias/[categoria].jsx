import LayoutJoiasPages from "@/components/LayoutJoiasPages"
import api from "@/services/api"
import Head from 'next/head'
import { useRouter } from 'next/router'

export async function getStaticProps(context) {

  const { params } = context

  async function getJoiasCategorias(params) {
    try {
      const response = await api.get(`/joias/${params.categoria}`)
      return response.data

    } catch (error) {
      console.log(error)
    }
  }
  const joiasCategoria = await getJoiasCategorias(params);

  return {
    props: {
      joiasCategoria
    }
  }
}

export async function getStaticPaths() {

  async function getCategoriasPaths() {
    try {
      const response = await api.get('/categorias')
      return response.data

    } catch (error) {
      console.log(error)
    }
  }

  const data = await getCategoriasPaths()

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