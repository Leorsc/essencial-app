import Link from "next/link"
import Head from 'next/head'

export async function getStaticProps(context) {

  const { params } = context

  const data = await fetch(`http://localhost:3333/${params.reference}`)

  const joiaSelecionada = await data.json()
  return {
    props: {
      joiaSelecionada
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch('http://localhost:3333/joias')

  const data = await response.json()
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