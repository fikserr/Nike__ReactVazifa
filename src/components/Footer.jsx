import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import Google from "../images/google.png";
import Pinterest from "../images/pinterest.png";


function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
            <form action="" className="footer__form">
                <input type="text" className="footer__input" placeholder="Your name"/>
                <textarea rows="5" className="footer__area" placeholder="Message"></textarea>
                <button className="footer__button" type="submit">Submit</button>
            </form>
            <div className="footer__nav">
                <ul className="footer__list">
                    <li className="footer__item"><a href="" className="footer__link">Sneakers</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Gumshoes</a></li>
                    <li className="footer__item"><a href="" className="footer__link">T-shirts</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Shorts</a></li>
                </ul>
                <ul className="footer__list">
                    <li className="footer__item"><a href="" className="footer__link">Jeans</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Sweaters</a></li>
                    <li className="footer__item"><a href="" className="footer__link">Sweatshirts</a></li>
                </ul>
            </div>
            <div className="footer__social">
                <a href="" className="footer__social-link"><img src={Facebook} alt="facebook"/></a>
                <a href="" className="footer__social-link"><img src={Twitter} alt="twitter"/></a>
                <a href="" className="footer__social-link"><img src={Google} alt="google"/></a>
                <a href="" className="footer__social-link"><img src={Pinterest} alt="pinterest"/></a>
            </div>
        </div>
    </footer>
    </div>
  )
}

export default Footer