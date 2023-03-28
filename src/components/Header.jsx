import Image from "next/image";
import { useRouter } from "next/router";
import InputSearch from "./InputSearch";
import Navbar from "./Navbar";
import { User, ShoppingCart } from "lucide-react";
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

export default function Header() {
  const router = useRouter()


  function handleBack() {
    router.push('/')
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#8ccccc',
        contrastText: '#fff'
      }
    },
  });

  return (
    <header className="flex flex-col items-center justify-center sticky w-full h-38 z-50 top-0 bg-white">
      <div className="flex items-center justify-center bg-essencial-blue w-full h-6">
        <span className="text-sm">Frete grátis acima de R$399</span>
      </div>
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
        <div className="flex items-center gap-6 ">
          <div className="flex items-center gap-1 w-24 cursor-pointer hover:scale-105">
            <User size={36} />
            <span className="text-xs">Olá! Entre ou Cadastre-se</span>
          </div>

          <ThemeProvider theme={theme}>
            <IconButton className='hover:scale-105' aria-label="cart">
              <Badge badgeContent={4} color="primary">
                <ShoppingCart className="cursor-pointer " />
              </Badge>
            </IconButton>
          </ThemeProvider>
        </div>
      </div>
    </header >
  )
}