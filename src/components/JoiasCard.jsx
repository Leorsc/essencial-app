import Link from "next/link"
import { useState } from "react";

export default function JoiasCard({ joia }) {
  const [on, setOn] = useState(false)
  const priceTransform = `R$ ${(joia.valor / 100).toFixed(2).toString().replace(".", ",")}`
  const priceInstallment = `R$ ${(joia.valor / 1000).toFixed(2).toString().replace(".", ",")}`

  function onMouseEnter() {
    setOn(true)
  };

  function onMouseLeave() {
    setOn(false)
  };

  return (
    <Link
      href={`/joias/${joia.categoria_name}/${(joia.descricao.normalize('NFD').replace(/[\u0300-\u036f]/g, "")).toLowerCase().replace(/ /g, "-")}-${joia.reference}`}
      key={joia.id}>
      <div
        key={joia.id}
        className='flex flex-col items-center justify-between w-72 h-96 border border-solid border-gray-200'
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="w-96 h-64" src={joia.image} alt={joia.descricao} />
        <div className="flex flex-col items-center justify-evenly w-full h-full">
          <h1 className="text-center">{joia.descricao}</h1>
          {on ?
            <div className='w-36 h-10 flex items-center justify-center bg-black text-slate-50 font-sans font-extralight uppercase'>
              comprar
            </div>
            :
            <div className="flex flex-col items-center h-10">
              <strong>{priceTransform}</strong>
              <span>{`10x sem juros ${priceInstallment}`}</span>
            </div>
          }
        </div>
      </div>
    </Link>
  )
}
