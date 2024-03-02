import React, { useState } from "react";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Logo from '../assets/wavjam_logo.png'
import Divider from '@mui/material/Divider';
import '../styles/home.css'

export default function NavBar(){
  const [showNoti, setShowNoti] = useState(false)
  const [showUpload, setShowUpload] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)

  function notification() {
    setShowNoti(prev => !prev)
  }
  function uploadContainer(){
    setShowUpload(prev => !prev)
  }
  function isLoggedIn(){
    setLoggedIn(prevVal => !prevVal)
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="nav-container">
      <div className="nav-top">
        <div className="nav-left">
          <NavLink to='/'>
            <img style={{
            width: '30px',
            height: '30px'
            }} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3211652/waveform-icon-md.png" alt="wavform" 
            />
          </NavLink>
          
        </div> 
        <div className="nav-right">

          <NavLink to='/become-a-seller'><Button variant='text' style={{marginRight: '30px'}}>Become a Seller</Button></NavLink>

          <div className='login-buttons'>
            <div>
              <NavLink to='/signupform'><Button variant='contained' size='medium' style={{backgroundColor: '#8C52FF', marginRight: '20px'}}>Sign Up</Button></NavLink>
            </div>
            <div>
              <NavLink to='/login'> <Button variant='contained' size='medium' style={{backgroundColor: '#C6C6C6', color: 'black'}}>Log In</Button></NavLink>
            </div>
          </div>



          
          {/* <CloudUploadOutlinedIcon className="nav-cloud-icon" onClick={uploadContainer}/>

          {showUpload && (
            
          <form id="file-upload-form" className="uploader">
            <input id="file-upload" type="file" name="fileUpload" accept="image/*" />
            <label htmlFor="file-upload" id="file-drag">
              <img id="file-image" src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3211652/waveform-icon-md.png" alt="wavform" className="hidden" style={{width: '30px', height: '30px'}} />
              <div id="start">
                <i className="fa fa-download" aria-hidden="true"></i>
                <div>Select a file or drag here</div>
                <div id="notimage" className="hidden">Please select an image</div>
                <span id="file-upload-btn" className="btn btn-primary">Select a file</span>
              </div>
              <div id="response" className="hidden">
                <div id="messages"></div>
              </div>
            </label>
          </form>
            
          )}
          <div style={{
            marginRight: '30px'
          }}>
            <Badge badgeContent={1} color="primary">
              <NotificationsActiveOutlinedIcon className="nav-noti-icon" onClick={notification} />
              {showNoti && (
                <div className="notification-container">

                  <h1 style={{
                    textAlign: 'center', 
                    backgroundColor: 'grey',
                    fontSize: '20px'}}>
                  Notifications</h1>

                  <ul>
                    <li>
                      <p style={{fontWeight: 'bold', fontStyle: 'italic'}}> Miguel Commented on your post: </p>
                      <p>"This is so cool!"</p>
                    </li>
                  </ul>
                  <Divider />
                </div>
              )}
            </Badge>

          </div>
      
          <Button
            id="fade-button"
            aria-controls={open ? 'fade-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            <img style={{
              borderRadius:'50%',
              width: '30px',
              height: '30px'
            }} src="https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg"/>
          </Button>

          <Menu
            id="fade-menu"
            MenuListProps={{
              'aria-labelledby': 'fade-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >

            {loggedIn ? 
              <MenuItem onClick={handleClose}> <NavLink to='/profile'>Profile</NavLink> </MenuItem> 
            : null}
            
            {loggedIn ? <MenuItem onClick={handleClose}>My Account</MenuItem> : null}

            <NavLink to='/saved'>
              {loggedIn ? <MenuItem onClick={handleClose}>My Saves</MenuItem> : null}
            </NavLink>


            
            {loggedIn ?
            <MenuItem onClick={handleClose}>
              Logout
            </MenuItem> 
            :
            <NavLink to='/login'>
              <MenuItem onClick={handleClose}>
                Sign In
              </MenuItem> 
            </NavLink>
            
            }
          </Menu> */}

        </div>
      </div>

      <div className="nav-headers">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/feed'>Feed</NavLink>
        <NavLink to='/events'>Events</NavLink>
        {/* <NavLink to='/news'>News</NavLink> */}
        {/* <NavLink to='/news'>Sync Liscensing</NavLink> */}
        {/* <NavLink to='/news'>Active Venues</NavLink> */}
        {/* <NavLink to='/news'>Workshops</NavLink> */}
        {/* <NavLink to='/news'>Internships</NavLink> */}
        {/* <NavLink to='/news'>Rent A Musician</NavLink> */}
        <NavLink to='/search'>Search</NavLink>
      </div>
    </div>
  )
}