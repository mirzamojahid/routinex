import React from 'react';
import { 
  Button, 
  Card, 
  List,
  Drawer,
} from 'antd'

import { useState } from 'react';
import adminImage from '../../images/adminImage.png';


function Profile() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };

  return (
  <div>
    <Card hoverable title={<div className='flex jy_sb'>
      <span>Profile</span>
    </div>}>
    <div style={{display:'flex'}}>
      <div 
      style={{
        width: "900px",
        border: "1px solid rgba(7, 7, 7, 0.2)",
        marginLeft: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      >
      <div style={{marginTop:20, display: "flex", flexDirection: "column",alignItems: "center",}}>
        <img style={{
          height:180, 
          width:180, 
          borderRadius: 30, 
          border:"1px solid rgb(78, 255, 158)"
          }}
          src={adminImage} alt=''/>
        <h3 style={{marginTop:10}}>Md Abdur Rakib</h3>
        <p>Admin</p>
      </div>
      <div style={{paddingLeft: 40}}>
        <div style={{display:"flex", margin:15}}>
          <h3 style={{width:180}}>User Name:</h3>
          <p>abdurrakib</p>
        </div>
        <div style={{display:"flex", margin: 15}}>
          <h3 style={{width:180}}>Email:</h3>
          <p>abdurrakib@gmail.com</p>
        </div>
        <div style={{display:"flex", margin: 15}}>
          <h3 style={{width:180}}>Phone Number:</h3>
          <p>+8801759728416</p>
        </div>
        <div style={{display:"flex", margin: 15}}>
          <h3 style={{width:180}}>Joined Date:</h3>
          <p>16 January 2024</p>
        </div>
      </div>
      <div className='flex'>
        <Button 
        style={{width:150, marginBottom:20}} 
        type="primary" 
        className='mar_l5' 
        onClick={showDrawer}
        children={<span className='fwhite'>Update</span>}
        >
          </Button>
        <Drawer
      title="Add Room"
      width={400}
      onClose={onClose}
      open={open}
    >
      <List></List>
    </Drawer>
    </div>
    </div>
    </div>
    </Card>
  </div>
  )
}

export default Profile