import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>Essencial, Erro 404!</title>
      </Head>
      <div className='flex flex-col items-center -mt-10'>
        <Image src='/images/error-404.png' width={800} height={500} alt='error 404' />
        <div className='flex flex-col items-center gap-8' >
          <h1 className='text-4xl font-serif font-medium'>Não encontramos resultados para sua busca.</h1>
          <span
            className='text-xl w-3/4 text-center font-light'
          >
            Mas não desista! Temos um catálogo incrível de itens que podem te agradar. Que tal dar uma olhada?
          </span>
          <Link className='flex items-center justify-center text-lg uppercase font-medium text-black w-72 h-14 border-solid bg-essencial-blue' href='/'>Ir para Home</Link>
        </div>
      </div>
    </>

  )
}

// border-solid border-red-400 border