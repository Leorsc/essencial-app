import InputSearch from "./InputSearch";
import { useRouter } from "next/router";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Header() {
  const router = useRouter()

  function handleBack() {
    router.push('/')
  }

  return (
    <header className="flex flex-col items-center justify-center sticky w-full h-32 z-50 top-0 bg-white">
      <div className="flex items-center justify-evenly gap-14 h-16">
        <Image className="cursor-pointer" src='/images/logo.png' width={250} height={67} alt='logo' onClick={handleBack} />
        <InputSearch />
        <a
          className="flex items-center gap-2 normal-case hover:underline"
          href='https://api.whatsapp.com/send?phone=5571999522116&text=Oi%20te%20achei%20no%20instagran%20e%20%E2%80%A6'
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a gente <Image src='/icons/whatsapp.png' width={19} height={19} alt='icone whatsapp' />
        </a>
      </div>
      <div className="flex items-center justify-evenly h-16 w-auto">
        <Navbar />
      </div>
    </header>
  )
}