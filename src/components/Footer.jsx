import { ChevronUp, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FooterList from "./FooterList";

export default function Footer() {

  //TODO criar uma tabela com tais informações dentro do banco de dados
  const menuItems = [
    {
      id: 1,
      title: 'Dúvidas',
      list: [
        'Perguntas Frequentes',
        'Garantia',
        'Cuidado com a peça',
        'Guia de Medidas'
      ]
    },
    {
      id: 2,
      title: 'Atendimento',
      list: [
        'Fale Conosco',
        'Encontre nossos revendedores'
      ]
    },
    {
      id: 3,
      title: 'Seja Essencial',
      list: [
        'Seja uma Revendedora',
        'Loja online'
      ]
    },
    {
      id: 4,
      title: 'Essencial SemiJoias',
      list: [
        'Quem Somos',
        'Trabalhe Conosco'
      ]
    },
    {
      id: 5,
      title: 'Links Úteis',
      list: [
        'Termos de Uso',
        'Aviso de Privacidade'
      ]
    }
  ]

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex flex-col items-center justify-center gap-6 w-full h-52 bg-white mt-36">
      <div className='flex h-full items-start justify-between gap-12'>
        {
          menuItems.map((item) => (
            <FooterList
              key={item.id}
              title={item.title}
              list={item.list}
            />
          ))
        }
      </div>
      <div className='flex flex-col items-center justify-center gap-4 h-auto pr-96 mr-96 -ml-20 pl-2'>
        <span className="text-sm">Redes Sociais</span>
        <div className="flex gap-2 cursor-pointer ml-8 ">
          <Facebook className="hover:opacity-70" size={30} color='#8ccccc' />
          <Youtube className="hover:opacity-70" size={30} color='#8ccccc' />
          <Linkedin className="hover:opacity-70" size={30} color='#8ccccc' />
          <Link className="hover:opacity-70" href='https://www.instagram.com/essencial_semi_joias/' target='_blank'><Instagram size={30} color='#8ccccc' /></Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-auto pb-2" style={{ backgroundColor: 'rgb(140, 204, 204,0.3)' }}>
        <Image src='/images/logo-black.png' width={150} height={67} alt='logo' />
        <span>
          Copyright &copy; 2023 Leonardo Cruz
        </span>
      </div>
      <a
        href='https://api.whatsapp.com/send?phone=5571999522116&text=Oi%20te%20achei%20no%20instagran%20e%20%E2%80%A6'
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image className="fixed left-8 bottom-24 hover:opacity-70" src='/icons/whatsapp.png' width={50} height={50} alt='icone whatsapp' />
      </a>
      <div
        className="flex items-center justify-center fixed right-8 bottom-4 bg-essencial-blue rounded-full w-8 h-8 cursor-pointer hover:opacity-70"
        onClick={handleClick}
      >
        <ChevronUp />
      </div>

    </footer>
  )
}

