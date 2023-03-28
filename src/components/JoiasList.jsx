import JoiasCard from "./JoiasCard"

export default function JoiasList({ joias }) {
  return (
    <>
      {
        joias.map((joia) => (
          <JoiasCard key={joia.id} joia={joia} />
        ))
      }
    </>
  )
}
