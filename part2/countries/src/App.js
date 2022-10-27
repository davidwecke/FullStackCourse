import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({search, handleSearch}) => {
  return(
    <div>
      <input value={search} onChange={handleSearch}/>
    </div>
  )
}

const Languages = ({languages}) => {
  const languageArray = []
  for (let x in languages) {
    languageArray.push(languages[x])
  }

  return (
    <div>
      {languageArray.map(language => <li key={language}>{language}</li>)}
    </div>
  )
}

const Country = ({country}) => {
  return (
    <div>
      {country.name.common}
    </div>
  )
}

const Flag = ({flagURL}) => {
  console.log(flagURL)
  return (
    <div>
    <img src={flagURL}></img>
    </div>
  )
}

const CountryDetailed = ({country}) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        <Languages languages={country.languages} />
      </ul>
      <Flag flagURL={country.flags.png} />
    </div>
  )
}
 
const Countries = ({countries}) => {
  if(countries.length === 0) {
    return(
      <div>
        Loading countries...
      </div>
    )
  } 

  if(countries.length === 1) {
    return(
      <div>
        <CountryDetailed country={countries[0]} />
      </div>
    )
  }

  if(countries.length > 10) {
    return (
      <div>
        Too many countries to display.
      </div>
    )
  }

  return (
    <div>
    {countries.map(country => <Country country={country} key={country.cca2}/>)}
    </div>
  )
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Filter search={search} handleSearch={handleSearch} />
      <Countries countries={countriesToShow} />
    </div>
  )
}

export default App;
