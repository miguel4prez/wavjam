import React,{ useState } from "react";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import '../styles/postform.css'

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState([])
  const [description, setNewDescription] = useState('')
  const [details, setNewDetails] = useState('')

  const [dataSuccess, setDataSuccess] = useState(null)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleSubmit(event) {
    event.preventDefault()

    fetch('http://localhost:3000/saved_data', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        description,
        details
      })
    })
    .then(res => res.json())
    .then(data => {
      setNewData([...newData, data])
      setOpen(false)
      setDataSuccess(true)
    })

    setTimeout(() => {
      setDataSuccess(false)
    }, 3000)
  }
   
 

  return (
    <div>
      <button onClick={handleClickOpen}>Create a post</button>
      {open && (
        <div className="post-form-overlay">
          <div className="post-form-popup">

            <h1>Create Post</h1>
            <h3>This is your chance for others to find you based on what you are looking for</h3>

            <form className="post-form" onSubmit={handleSubmit}>
              <input 
              placeholder="A Short Description..." 
              value={description}
              onChange={event => setNewDescription(event.target.value)}
              />
              <textarea 
              placeholder="Details about your post" 
              cols="30" 
              rows="5"
              value={details}
              onChange={event => setNewDetails(event.target.value)}
              />

              <div className="form-buttons">
                <button className='form-cancel' onClick={handleClose}>Cancel</button>
                <button className='form-submit' type='submit'>Submit</button>
              </div>
            </form>
            
          </div>
        </div>
      )}
       {dataSuccess ? <Alert className="alert" icon={<CheckIcon fontSize="inherit" />} severity="success">
        Post was successful.
      </Alert> : null}
    </div>
  );
}