import { useEffect, useState } from "react"
import "../../styles/style.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Main = () => {

  const [cities, setCities] = useState([])

  useEffect(() => {
    const getData = async () => {
    await fetch(
      "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json"
    )
    .then(res => res.json())
    .then(res => res.Ukraine)
    .then(res => setCities([...res]))
  }
  getData()
  }, [])

  return (
    <section className="main" id="main">
      <div className="main__container container">
        <div className="main-title">
          Click these buttons to find the nearest objects you need
        </div>
        <div className="btn__container">
          <div className="left-btn btn">
            <a href="#">FIND SHELTER</a>
          </div>
          <div className="right-btn btn">
            <a href="#">FIND CENTER</a>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d16650.25440811143!2d34.90362960174903!3d50.318047940806736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1649254625907!5m2!1sru!2sua"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Map"
      ></iframe>
      <div className="main__footer container">
        <h3 className="main__footer-title">
          Or select your city to find all available objects there
        </h3>
        <div id="countryCity">
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={cities}
            sx={{ width: 300,  margin: '12px auto'}}
            renderInput={(params) => <TextField {...params} label="Type or select your city" />}
          />
        </div>
      </div>
    </section>
    
  )
}

export default Main
