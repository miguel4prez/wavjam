import React, { useEffect, useState } from "react";
import { Country, State, City }  from 'country-state-city';

function PersonalInfo({ form, setForm }) {
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([])
  const [countryStates, setCountryStates] = useState([])
 

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (form.country) {
      const states = State.getStatesOfCountry(form.country)
      setCountryStates(states)
    } else {
      setCountryStates([]);
    }
  }, [form.country]);

  useEffect(() => {
    if (form.state) {
      const stateCities = City.getCitiesOfState(form.country, form.state);
      setCities(stateCities)
    } else {
      setCities([])
    }
  }, [form.state])

  return (
    <div>
          <input type='text' placeholder='username' />
          <select value={form.country} onChange={event => setForm({...form, country: event.target.value})}>
            <option value='' disabled>Choose a Country</option>
            {countries.map(country => (
              <option key={country.isoCode} value={country.isoCode}>{country.name}</option>
            ))}
          </select>

          <select value={form.state} onChange={event => setForm({...form, state: event.target.value})} >
            <option value='' disabled>{form.country ? 'Choose a state' : 'Choose a Country First'}</option>
            {countryStates.map(state => ( 
              <option value={state.isoCode}>{state.name}</option>
            ))}
          </select>
          
          <select value={form.city} onChange={event => setForm({...form, city: event.target.value})} >
            <option value='' disabled>{form.state ? 'Choose a city' : 'Choose a State First'}</option>
            {cities.map(city => ( 
              <option value={city.name}>{city.name}</option>
            ))}
          </select>
          
          
          <label htmlFor="pfp-upload">Upload a profile pic</label>
          <input type='file' accept='image/png, image/jpeg' id="pfp-upload"/>


          <label htmlFor='bio-text'>Create A Bio</label>
          <textarea type='text' id='bio-text' placeholder="Write something about yourself.."/>

    </div>
      
)
}

export default PersonalInfo;