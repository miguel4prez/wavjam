import React, { useState, useEffect } from "react";
import SignUp from "../components/MultiStepForm/SignUp";
import PersonalInfo from "../components/MultiStepForm/PersonalInfoForm";
import TypeForm from "../components/MultiStepForm/TypeForm";
import ChooseTagsForm from "../components/MultiStepForm/ChooseTagsForm";
import SongDataForm from "../components/MultiStepForm/SongDataForm";
import GenreForm from "../components/MultiStepForm/GenreForm";

function SignUpMultiForm() {
  const [pages, setPages] = useState(0)
  const [confirmPass, setConfimPass] = useState('')
  const [formValidate, setFormValidate] = useState(true)
  const [form, setForm] = useState({
    email: '',
    password: '',
    username: '',
    country: '',
    city: '',
    state: '',
    city: '',
    image: '',
    biography: '',
    type: '',
    genre: ''
  })
  const [songForm, setSongForm] = useState({
    title: '',
    song_url: ''
    // user_id: user.id
  })
  const [tagForm, setTagForm] = useState({
    tag_name: []
    // user_id: user.id
  })

  const formTitles =['Sign Up', 'Personal Info', 'Choose What Best Describes You', 'Pick a Genre', 'Upload Your Song', 'Pick 5 Tags You Relate To The Most']

  function displayForm(){
    if (pages === 0){
      return <SignUp form={form} setForm={setForm} confirmPass={confirmPass} setConfimPass={setConfimPass} />
    } else if (pages === 1){
      return <PersonalInfo form={form} setForm={setForm} />
    } else if (pages === 2) {
      return <TypeForm form={form} setForm={setForm} />
    } else if (pages === 3){
      return <GenreForm form={form} setForm={setForm} />
    }  else if (pages === 4){
      return <SongDataForm songForm={songForm} setSongForm={setSongForm}  />
    } else {
      return <ChooseTagsForm tagForm={tagForm} setTagForm={setTagForm} />
    }
  }

  // console.log(form)
  // console.log(tagForm)
  // console.log(songForm)

  return (
    <div style={{background: 'linear-gradient(90deg, #20294a, #320037)'}}>
      <div>
      <div className="signup-container">
      <div className='form-container'>
        <div style={{width: '100%', height: '10px', backgroundColor:'#320037', margin: '20px 0'}}>
          <div style={{
            width: `${pages === 0 ? '0' : pages === 1 ? '20' : pages === 2 ? '40' : pages === 3 ? '60' : '80'}%`, 
            height: '10px', 
            backgroundColor:'#8C52FF'}}></div>
        </div>
        <h1>{formTitles[pages]}</h1>

        {displayForm()}

        <div className="form-btns">
           <button 
            disabled={pages === 0}
            style={pages === 0 ? {cursor: 'not-allowed'} : {cursor: 'pointer'}}
            onClick={() => {
              setPages((current) => current - 1)
            }}> Back
          </button>

        {pages === formTitles.length - 1 ?  
          <button 
          style={{cursor: 'pointer'}}
          className="continue-btn"> Submit
          </button> 
          : 
          <button 
            className="continue-btn"
            style={{cursor: 'pointer'}}
            onClick={() => {
              setPages((current) => current + 1)
            }}> Continue
          </button> }

        </div>
       
      </div>
    </div>
      </div>
    </div>
  )
}

export default SignUpMultiForm;