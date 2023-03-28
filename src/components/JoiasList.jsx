import JoiasCard from "./JoiasCard"

export default function JoiasList({ joias }) {
  return (
    <>
      {
        joias.map((joia) => (
          <JoiasCard joia={joia} />
        ))
      }
    </>
  )
}
