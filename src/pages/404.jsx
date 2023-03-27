import Link from 'next/link'

export default function NotFound() {
  return (
    <>
      <h1>Não encontramos resultados para sua busca, aproveite e veja nossos destaques.</h1>
      <Link href='/joias'>VER TODOS OS PRODUTOS</Link>
    </>
  )
}