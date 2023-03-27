
import { useState } from "react";
import { Search, X } from 'lucide-react'


export default function InputSearch() {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState(false)

  function handleInputChange(event) {
    setActive(true)
    setSearch(event.target.value);
  }

  function handleSearch() {
    // TODO implementar requisição de busca pela api
    console.log(search);
    setSearch('')
  }

  function clearSearch() {
    setSearch('')
    setActive(false)
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      handleSearch();
    }
    return;
  }

  return (
    <div className="flex items-center w-96 border-solid border-gray-400 border rounded-3xl justify-between px-3 py-1 text-sm cursor-pointer">
      <input
        className="w-full"
        placeholder="Buscar"
        value={search}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
      />
      {active ? <X size={12} onClick={clearSearch} className='mr-1' /> : ""}

      <Search size={20} onClick={handleSearch} className="hover:scale-125" />
    </div>
  )
}