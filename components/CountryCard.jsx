import React from 'react'
import {Link} from 'react-router-dom'

export default function CountryCard({name, population, region, capital, countryFlag, data}) {
  // console.log(data)
  return (
    <Link className="countries-list" to={`/${name}`} state={data}>
      <div className='country-card'>
        <div className="flag-container">
      <img src={countryFlag} alt={`${name} flag`}/>  
        </div>
                <div className="card-text">
                    <h3 className='card-title'>{name}</h3>
                    <p><b>Population: </b>{population}</p>
                    <p><b>Region: </b>{region}</p>
                    <p><b>Capital: </b>{capital}</p>
                </div>
                </div>
                </Link>
  )
}
