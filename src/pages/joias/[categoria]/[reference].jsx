import Link from "next/link"
import Head from 'next/head'
import api from "@/services/api"

export async function getStaticProps(context) {

  const { params } = context

  async function handleReference(params) {
    try {
      const response = await api.get(`/${params.reference}`)

      return response.data

    } catch (error) {
      console.log(error)
    }
  }

  const joiaSelecionada = await handleReference(params)

  return {
    props: {
      joiaSelecionada
    }
  }
}

export async function getStaticPaths() {

  async function handleJoiasPaths() {
    try {
      const response = await api.get('/joias')
      return response.data
    } catch (error) {
      console.log(error)
    }
  }

  const data = await handleJoiasPaths()
  const paths = data.map((joia) => {
    return {
      params: {
        categoria: `${joia.categoria_name}`,
        reference: `${(joia.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "")).toLowerCase().replace(/ /g, "-")}-${joia.reference}`
      }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export default function Joia({ joiaSelecionada }) {
  const categoriaName = joiaSelecionada.categoria_name;
  const categoriaNameCapitalized = categoriaName.charAt(0).toUpperCase() + categoriaName.slice(1);
  const pageTitle = categoriaNameCapitalized + ' | ' + joiaSelecionada.descricao + ' - ' + 'Essencial'

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="min-h-screen">
        <h1>{joiaSelecionada.descricao}</h1>
      </div>
    </>


  )
}