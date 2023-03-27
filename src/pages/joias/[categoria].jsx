import Link from "next/link"
import Head from 'next/head'

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
  const categoriaName = joiasCategoria[0].categoria_name;
  const categoriaNameCapitalized = categoriaName.charAt(0).toUpperCase() + categoriaName.slice(1);
  const pageTitle = categoriaNameCapitalized + ' | ' + 'Essencial'
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <div className="flex flex-col">
        {
          joiasCategoria.map((joia) => (
            <Link href={`/joias/${joia.categoria_name}/${(joia.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "")).toLowerCase().replace(/ /g, "-")}-${joia.reference}`} key={joia.id}>{joia.descricao}</Link>
          ))
        }
      </div>
    </>

  )
}
