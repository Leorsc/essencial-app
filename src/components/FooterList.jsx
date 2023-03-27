export default function FooterList({ title, list }) {

  return (
    <div className="flex flex-col items-start">
      <strong className="mb-1 text-base">{title}</strong>
      {list.map((item, index) => (
        <span className="text-sm leading-6 hover:opacity-50 cursor-pointer" key={index}>{item}</span>
      ))}
    </div>
  )
}