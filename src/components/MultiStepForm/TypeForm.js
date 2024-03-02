import React, { useState } from "react";

function TypeForm({ form, setForm }) {
  
  const type = ['Musician', 'Artist', 'Band', 'Group']

  function handleClick(value) {
    setForm({...form, type: value})
  }

  function handleRemove(){
    setForm({ ...form, type: '' })
  }

  return (
    <div className="form-tags-container">
      <div className="form-tag-elements">

        {type.map((item, index) => {
          return (
          <button 
            key={index}
            disabled={form.type} 
            onClick={() => {
            handleClick(item)
          }} className="form-tags">
            {item}
          </button>)
        })}

      </div>

      <hr />
      {form.type && <span style={{color: 'red', margin: '10px 10px'}}>Reached Limit</span>}
      <div className="saved-tags">
        {form.type ?
              (<p onClick={() => {
              handleRemove(form.type)
              }} 
              >{form.type}</p>) : 
              <span>Click on a tag to display it here</span> }
      </div>
      <hr />
    </div>
  )
}

export default TypeForm;