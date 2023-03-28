import Dropdown from './Dropdown';

function Navbar() {

  //TODO criar uma tabela com tais informações dentro do banco de dados
  const menuItems = [
    {
      id: 1,
      title: 'Joias',
      list: [
        'Solitários',
        'Alianças',
        'Aneis',
        'Brincos',
        'Colares e Correntes',
        'Pulseiras'
      ]
    },
    {
      id: 2,
      title: 'Coleções',
      list: [
        'Coleção de Verão',
        'Coleção de Outono',
        'Coleção de Inverno',
        'Coleção de Primavera',
      ]
    },
    {
      id: 3,
      title: 'Quem Somos',
      list: [
        'Sobre nós',
        'Nossa equipe',
        'Nossa história',
      ]
    },
    {
      id: 4,
      title: 'Quero Comprar',
      list: [
        'Como comprar',
        'Política de envio',
        'Política de devolução',
      ]
    },
    {
      id: 5,
      title: 'Como Revender',
      list: []
    }
  ]

  return (
    <>
      <nav className="w-full h-full flex justify-evenly items-center">
        {
          menuItems.map((item) => (
            <Dropdown
              key={item.id}
              title={item.title}
              list={item.list}
            />
          ))
        }
      </nav>
    </>
  );
}

export default Navbar;

//TODO implementar a navegação para as paginas das jóias 

{/* <Link href='/joias'>Joias</Link>
          <Link href='/joias/brincos'>Brincos</Link>
          <Link href='/joias/pulseiras'>Pulseiras</Link>
          <Link href='/joias/colares'>Colares</Link>
          <Link href='/joias/aneis'>Aneis</Link> */}