import React, { useState, useEffect} from "react";
import '../styles/search.css'
import UserCard from "../components/UserCard";
import { useParams, useSearchParams, useLocation } from "react-router-dom";


function Search(){
  const [textSearch, setTextSearch] = useState('')
  const [selectType, setSelectType] = useState('')
  const [selectTag, setSelectTag] = useState('')
  const [selectCountry, setSelectCountry] = useState('')
  const [selectGenre, setSelectGenre] = useState('')
  const [selectSort, setSelectSort] = useState('')
  const [userData, setUserData] = useState([])

  const type = useLocation()

  // const [searchParams, setSearchParams] = useSearchParams({ 
  //   textSearch: '', 
  // selectType: '', 
  // selectTag: '', 
  // selectCountry: '', 
  // selectGenre: '' })



  const genre = useParams();

  useEffect(() => {
    fetch('http://127.0.0.1:5555/users')
    .then(res => res.json())
    .then(data => {
      setUserData(data)
    })
  }, []);

  useEffect(() => {
    setSelectGenre(genre.genre)
    setSelectType(type.state)
    console.log(type.state)
  }, [])

  const filtertedCards = userData.filter(user => {
    return (
      (!textSearch || user.username.toLowerCase().startsWith(textSearch.toLowerCase())) &&
      (!selectGenre || user.genre.toLowerCase().includes(selectGenre.toLowerCase())) &&
      (!selectCountry || user.country.toLowerCase().includes(selectCountry.toLowerCase())) &&
      (!selectType || user.type.toLowerCase().includes(selectType.toLowerCase())) && 
      (!selectTag || user.tags.map(tag => tag.tag_name).includes(selectTag))
    );
  })
  
  // .sort((a, b) => a.name.localeCompare(b.name));

  function handleReset() {
    setTextSearch('')
    setSelectCountry('')
    setSelectGenre('')
    setSelectTag('')
    setSelectType('')
  }


  return (
    <div className="search-page">
        
        <div className="search-container">
        <h1>Discover</h1>

        <div className="text-search-container">
          <input type="search" value={textSearch} onChange={event => setTextSearch(event.target.value)} placeholder="search here..." />
        </div>
        

        <div className="search-filter-buttons">
          <button>For You</button>
          <select value={selectGenre} onChange={event => setSelectGenre(event.target.value)}>
            <option value='' disabled>Genre</option>
            <option value=''>All</option>
            <option value='Pop'>Pop</option>
            <option value='Rap'>Rap</option>
            <option value='Rock'>Rock</option>
            <option value='Punk'>Punk</option>
          </select>

          <select value={selectType} onChange={event => setSelectType(event.target.value)}>
            <option value='' disabled>Type</option>
            <option value=''>All</option>
            <option value='Musician'>Musician</option>
            <option value='Band'>Band</option>
            <option value='Artist'>Artist</option>
            <option value='Visuals'>Visuals</option>
          </select>

          <select value={selectTag} onChange={event => setSelectTag(event.target.value)}>
            <option value='' disabled>Tags</option>
            <option value=''>All</option>
            <option value='MGK'>MGK</option>
            <option value='Lil Uzi Vert'>Lil Uzi Vert</option>
            <option value='Emo'>Emo</option>
            <option value='Facemelter'>Facemelter</option>
          </select>

          <select value={selectCountry} onChange={event => setSelectCountry(event.target.value)}>
            <option value='' disabled>Country</option>
            <option value=''>All</option>
            <option value='US'>US</option>
            <option value='JP'>JP</option>
            <option value='CA'>CA</option>
            <option value='FR'>FR</option>
          </select>
        
        <button onClick={handleReset}>Reset All</button>
        </div> 

        <hr />
        
        <div>
          {filtertedCards.length > 0 ? (
            <div className="user-cards-container">
             {filtertedCards.map(userData => (<UserCard userData={userData} key={userData.id} />))}
            </div>) 
            : 
            (<p className="no-artist-match">No matching results found.</p>)}
        </div>
      </div>
      
    </div>
  )
}

export default Search;