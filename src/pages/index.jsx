import Link from "next/link"
import Head from 'next/head'
import Image from "next/image"
import CategoriaNav from "@/components/CategoriaNav"

export async function getStaticProps() {
  const data = await fetch('http://localhost:3333/categorias')

  const categorias = await data.json()

  return {
    props: { categorias },
  }
}

export default function Home({ categorias }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="keywords" content="Aneis, Brincos, Colares"></meta>
        <meta name="description" content="Encontre a melhor Joia para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="page">
        <div className="relative">
          <video className="object-cover  w-full" autoPlay muted loop playsInline>
            <source src='/video/animation-site.mp4' type="video/mp4" />
            Seu navegador não suporta vídeo em HTML5.
          </video>
          <Image className="absolute bottom-0 right-0" src='/images/logo-clean.png' width={250} height={100} alt='logo' />
        </div>
        <div className="flex items-center justify-center flex-col">
          <h1>Navegue por Categoria</h1>
          <div className="flex items-center justify-center gap-2">
            <CategoriaNav categorias={categorias} />
          </div>
        </div>
        <div>

        </div>
      </div>
    </>
  )
}

