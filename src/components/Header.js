import logo from "../image/logo.svg"

function Header() {
  return (
    <header className="header section page__header">
      <img className="header__logo" alt="Логотип сайта" src={logo} />
    </header>
  )
}

export default Header
