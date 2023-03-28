import JoiasList from "@/components/JoiasList"

export default function LayoutJoiasPages({ joias }) {
  return (
    <div className="min-h-screen flex mx-40 ">
      <div className="w-1/6 border border-solid border-red-500">
        <h1>Filtrar</h1>
      </div>
      <div className="w-5/6 flex gap-y-4 justify-around flex-wrap">
        <JoiasList joias={joias} />
      </div>
    </div>
  )

}