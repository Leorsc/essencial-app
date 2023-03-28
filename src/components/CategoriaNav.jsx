import Link from "next/link"

export default function CategoriaNav({ categorias }) {

  return (
    <>
      {
        categorias.map((categoria) => (
          <Link key={categoria.id} href={`/joias/${categoria.descricao}`}>
            <div
              className="flex flex-col items-center border-solid border-gray-200 border rounded-md cursor-pointer hover:border-essencial-blue hover:text-essencial-blue"

            >
              <img className=" pt-2 h-36 w-34" src={categoria.image} alt={categoria.descricao} />
              <span className="capitalize">{categoria.descricao}</span>

            </div>
          </Link>
        ))
      }
    </>
  )
}