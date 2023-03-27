import Image from "next/image";
import Link from "next/link";
import FooterList from "./FooterList";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";

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

  return (
    <footer className="flex flex-col items-center justify-center gap-6  w-full h-42 bg-white mt-10">
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
          <Facebook size={30} color='#8ccccc' />
          <Youtube size={30} color='#8ccccc' />
          <Linkedin size={30} color='#8ccccc' />
          <Link href='https://www.instagram.com/essencial_semi_joias/' target='_blank'><Instagram size={30} color='#8ccccc' /></Link>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full h-auto pb-2" style={{ backgroundColor: 'rgb(140, 204, 204,0.3)' }}>
        <Image src='/images/logo-black.png' width={150} height={67} alt='logo' />
        <span>
          Copyright &copy; 2023 Leonardo Cruz
        </span>
      </div>
    </footer>
  )
}