import React from "react";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import '../styles/home.css'

export default function NavBar(){
  const [anchorEl, setAnchorEl] = React.useState(null);
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
          <img style={{
            width: '30px',
            height: '30px'
          }} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3211652/waveform-icon-md.png" 
          />

          <input style={{
            borderRadius: '17px',
            border: 'solid black 1px',
            padding: '10px'
          }} type="text" placeholder="Search for... 'lil uzi'"
          />
        </div>  
        <div className="nav-right">
          <CloudUploadOutlinedIcon className="nav-cloud-icon" />
          <NotificationsActiveOutlinedIcon className="nav-noti-icon" />

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
            }} src="https://cdn.ebaumsworld.com/mediaFiles/picture/1035099/85708057.jpg" 
            />
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
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  )
}