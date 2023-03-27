import { useState } from "react";

export default function Dropdown({ title, list }) {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false);

  function handleClick() { setClick(!click) };

  function onMouseEnter(event) {
    const div = event.currentTarget;
    div.classList.add('highlight');
    setDropdown(true);
  };

  function onMouseLeave(event) {
    const div = event.currentTarget;
    div.classList.remove('highlight');
    setDropdown(false);
  };

  return (
    <div className='relative h-full w-36 flex items-center justify-start border-solid  p-2 cursor-pointer z-10' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <button className="hover:opacity-40 h-full w-full " onClick={() => setClick(true)}>{title}</button>
      {dropdown &&
        <div
          onClick={handleClick}
          className='absolute flex flex-col items-start justify-between w-52 top-16 -left-2 p-4 h-60 shadow-2xl bg-white'
        >
          <span className='flex items-center w-full h-full cursor-pointer hover:opacity-50' onClick={() => setClick(false)}>Borboletas 2023</span>
          <span className='flex items-center w-full h-full cursor-pointer hover:opacity-50 border-t border-solid border-gray-200' onClick={() => setClick(false)}>O Poder da Gio</span>
          <span className='flex items-center w-full h-full cursor-pointer hover:opacity-50 border-t border-solid border-gray-200' onClick={() => setClick(false)}>Alto Verão</span>
          <span className='flex items-center w-full h-full cursor-pointer hover:opacity-50 border-t border-solid border-gray-200' onClick={() => setClick(false)}>Momentos para Celebrar</span>
          <span className='flex items-center w-full h-full cursor-pointer hover:opacity-50 border-t border-solid border-gray-200' onClick={() => setClick(false)}>Dia das mães</span>
        </div>
      }

    </div>
  )
}