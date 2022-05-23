import "../../styles/style.css"
import elliple from "../../img/icons/elliple.png"
import geopos from "../../img/icons/geopos_icon.png"
import search from "../../img/icons/serch_icon.png"

const Header = () => {
  return (
    <div>
      <header className="header" id="header">
        <nav className="nav" id="nav">
          <div className="nav__container container">
            <div className="empty__box"></div>
            <div className="logo__box">
              <h2 className="nav-title">
                <a href="#">HUMAHELP</a>
              </h2>
            </div>
            <div className="icons__box">
            <input type="text" placeholder="Type your city"/>
              <div className="serch-icon">
                <img src={search} alt="search_icon" />
              </div>
              <div className="points-icon">
                <img src={elliple} alt="1" className="point" />
                <img src={elliple} alt="1" className="point" />
                <img src={elliple} alt="1" className="point" />
              </div>
            </div>
          </div>
        </nav>
        <div className="header__container container">
          <div className="header__left">
            <h1 className="header-title">
              Find the nearest shelter or humanitary <br /> help center nearby
              you
            </h1>
            <p className="header-text">
              We introduce you the service which may help you to find the
              nearest or the exact <br /> center or shelter in few seconds!
            </p>
          </div>
          <div className="header__right">
            <span className="header__right-container">
              <img src={geopos} alt="geopos_icon" />
            </span>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
