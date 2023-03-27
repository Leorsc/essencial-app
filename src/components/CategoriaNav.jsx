import Link from "next/link"

export default function CategoriaNav({ categorias }) {

  return (
    <>
      {
        categorias.map((categoria) => (
          <Link href={`/joias/${categoria.descricao}`}>
            <div
              className="flex flex-col items-center border-solid border-gray-200 border shadow rounded-md cursor-pointer"
              key={categoria.id}
            >
              <img className=" pt-2 h-44 w-36" src={categoria.image} alt={categoria.descricao} />
              <span>{categoria.descricao}</span>

            </div>
          </Link>
        ))
      }
    </>
  )
}