import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import '../styles/feed.css'
import FeedCard from "../components/FeedCard";
import CircularIndeterminate from "../components/CircularIndeterminate";
import FormDialog from "../components/FormDialog";

function Feed() {
  const [textSearch, setTextSearch] = useState('')
  const [selectGenre, setSelectGenre] = useState('')
  const [selectType, setSelectType] = useState('')
  const [selectTag, setSelectTag] = useState('')
  const [selectCountry, setSelectCountry] = useState('')
  const [selectSort, setSelectSort] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  const [postData, setPostData] = useState([])
  const [selectedOption, setSelectedOption] = useState(null)

  // useEffect(() => {
  //   fetch('http://127.0.0.1:5555/users')
  //   .then(res => res.json())
  //   .then(data => {
  //     setPostData(data)
  //     setIsLoaded(true)

  //     if (data.length > 0) {
  //       setSelectedOption(data[0]);
  //     }
  //   })
  // }, []);

  useEffect(() => {
    fetch('http://127.0.0.1:5555/posts')
    .then(res => res.json())
    .then(data => {
      setPostData(data)
      setIsLoaded(true)

      if (data.length > 0) {
        setSelectedOption(data[0]);
      }
    })
  }, []);

  const filtertedCards = postData.filter(post => {
    return (
      (!textSearch || post.description.toLowerCase().startsWith(textSearch.toLowerCase())) &&
      (!selectGenre || post.user.genre.toLowerCase().includes(selectGenre.toLowerCase())) &&
      (!selectCountry || post.user.country.toLowerCase().includes(selectCountry.toLowerCase())) &&
      (!selectType || post.user.type.toLowerCase().includes(selectType.toLowerCase())) && 
      (!selectTag || post.user.tags.map(tag => tag.tag_name).includes(selectTag))
    );
  });
  // .sort((a, b) => a.name.localeCompare(b.name));


  function handleReset() {
    setTextSearch('')
    setSelectCountry('')
    setSelectGenre('')
    setSelectTag('')
    setSelectType('')
  }


  function postOnClick(postId) {
    fetch(`http://127.0.0.1:5555/posts/${postId}`)
    .then(res => res.json())
    .then(data => setSelectedOption(data))
  }


  if (!isLoaded || !filtertedCards){
    return <CircularIndeterminate />
  }
  else {
    return (
      <div className="feed-search-page">
          
      <div className="feed-search-container">
      <h1>Bulletin Dashboard</h1>
      <div className="feed-text-search-container">
        <input type="search" value={textSearch} onChange={event => setTextSearch(event.target.value)} placeholder="search here..." />
      </div>
      
  
      <div className="feed-search-filter-buttons">
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
  
      <div className='sort-sec'>
        <div className="sort-search">
          <p>SORT BY:</p>
          <select value={selectSort} onChange={event => setSelectSort(event.target.value)}>
            <option value='Revelance'>Revelance</option>
            <option value='Newest User'>Newest User</option>
          </select>
        </div>
        <div>
          <FormDialog />
        </div>
          
      </div>
  
      <div className="feed-section">
        <div className="feed-container">
          {filtertedCards.map(post => {
            return (
              <div>
                <FeedCard post={post} key={post.id} postOnClick={() => postOnClick(post.id)} />
                <hr />
              </div>
            )
          })}
        </div>
  
         
      <div className="post-details">
        <div>
          <img className='post-details-img' src={selectedOption.user.image} alt="User Avatar" />

          <p>@{selectedOption ? selectedOption.user.username : ''} 
          {selectedOption ? <img className='post-details-flag' src={`https://flagsapi.com/${selectedOption.user.country}/flat/64.png`} /> : ''}
          </p>

          <p>{selectedOption ? selectedOption.description : ''}</p>
          <hr />
          <h2>Details</h2>
          <div className="post-details-blurb">
            {selectedOption && selectedOption.details}
          </div>
          
  
          <div className="post-details-buttons">
            <Link to={`/users/${selectedOption.id}`}><button>Visit Profile</button></Link>
            <button>Save Post</button>
            <button>Message</button>
          </div>
          
        </div>
      </div>
        
      </div>
    
    </div>
    
  </div>
    )
  }

  
}

export default Feed;