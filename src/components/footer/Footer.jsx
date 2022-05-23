import "../../styles/style.css"
import phone from "../../img/icons/phone_icon.png"

const Footer = () => {
  return (
    <>
      <footer className="footer" id="footer">
        <div className="footer__container container">
          <div className="footer__text-block">
            <h2 className="footer-title">
              Your help would be really necessary!
            </h2>
            <p className="footer-text">
              Volounteers all over the world unite to help Armed Forces of
              Ukraine to fight evil! You can help ukrainian defenders to reach
              their victory as soon as possible by joining volounteering groups!
              Calls are free at the Ukraine’s territory
            </p>
            <div className="footer-contacts">
              <div>
                <img src={phone} alt="" className="contacts-imt" />
              </div>
              <div className="footer-phone-number">
                <a href="tel:+380992541841">+380992541841</a>
              </div>
              <div className="footer-phone-number">
                <a href="tel:+380991886109">+380991886109</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
