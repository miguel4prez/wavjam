import React from "react";
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { NavLink } from "react-router-dom";
import Logo from '../assets/wavjam_logo.png'

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
          }} src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3211652/waveform-icon-md.png" alt="wavform" 
          />

          <NavLink to="/"><img style={{width: '230px', marginLeft: '20px'}} src={Logo}/></NavLink>
          
        </div>  
        <div className="nav-right">
          <CloudUploadOutlinedIcon className="nav-cloud-icon" />

          <div style={{
            marginRight: '30px'
          }}>
            <Badge badgeContent={1} color="primary">
              <NotificationsActiveOutlinedIcon className="nav-noti-icon" />
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
            <MenuItem onClick={handleClose}>
              <NavLink to='/profile'>
                Profile
              </NavLink>
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </div>
      </div>

      <div className="nav-headers">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/artists'>Artists</NavLink>
        <NavLink to='/producers'>Producers</NavLink>
        {/* <NavLink to='/saved'>Saved</NavLink> */}
        {/* <NavLink to='/events'>Events</NavLink>
        <NavLink to='/news'>News</NavLink> */}
      </div>
    </div>
  )
}