import Logo from "../images/logo.png"

function Navbar() {
  return (
    <div>
      <nav className="header__nav">
            <div className="container">
                <a href="" className="header__logo"><img src={Logo} alt="logo"/></a>
                <ul className="header__list">
                    <li className="header__item"><a href="" className="header__link active">Sneakers</a></li>
                    <li className="header__item"><a href="" className="header__link">Gumshoes</a></li>
                    <li className="header__item"><a href="" className="header__link">T-shirts</a></li>
                    <li className="header__item"><a href="" className="header__link">Shorts</a></li>
                    <li className="header__item"><a href="" className="header__link">Jeans</a></li>
                    <li className="header__item"><a href="" className="header__link">Sweaters</a></li>
                    <li className="header__item"><a href="" className="header__link">Sweatshirts</a></li>
                </ul>
            </div>
        </nav>


    </div>
  )
}

export default Navbar