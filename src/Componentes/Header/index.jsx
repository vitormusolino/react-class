import Menu from "../Menu"

function Header() {

const menu = [
  {
    titulo: "Home",
    rota: '/'
  },
  {
    titulo: "Sobre",
    rota: '/sobre'
  },
  {
    titulo: "Serviços",
    rota: '/servicos'
  },
  {
    titulo: "Contato",
    rota: '/contato'
  }
]

  return (
    <header>
      <h1>Meu site</h1>
      <nav><ul><Menu headerMenu={menu}/></ul></nav>
    </header>
  );
}

export default Header;
