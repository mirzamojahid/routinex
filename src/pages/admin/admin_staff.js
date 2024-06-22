import React from 'react'
import { 
  Button, 
  Card, 
  List,
  Drawer,
  Select,
  Input,
} from 'antd'
import {roles} from '../../utils/constants';
import { useState } from 'react';
import adminImage from '../../images/adminImage.png';

const imgStyle = {
  width: 40,
  height: 40,
  borderRadius: 50
}

function AdminStaff() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  
  const onClose = () => {
    setOpen(false);
  };

  const searchName = (value) => {
    console.log(`selected ${value}`);
  };

  const roleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div>
      <Card hoverable title={<div className='flex jy_sb'>
        <span>Admin/Staff</span>
        <div className='flex'>
          <Input
            style={{
              width: 250,
              marginRight: 30
            }}
            placeholder="search by name"
            onChange={searchName}
          />
          <Select
            style={{
              width: 150,
              marginRight: 30
            }}
            placeholder="Select role"
            optionFilterProp="children"
            onChange={roleChange}
            options={roles}
          />
          <Button 
          style={{width:150}} 
          type="primary" 
          className='mar_l5' 
          onClick={showDrawer}
          children={<span className='fwhite'>Add Admin/Staff + </span>}
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
      </div>}>
      <div style={{display:'flex'}}>
        <div 
        style={{
          width: '350px',
          height:"80vh",
          border: '1px solid rgba(7, 7, 7, 0.2)',
          overflow: "auto",
          }}
        >
          <div className="slot">
            <div>
              <img style={imgStyle} src={adminImage} alt=''/>
            </div>
            <div className="slot-content">
              <h3 style={{width:180}}>Md Abdur Rakib</h3>
              <p>Admin</p>
            </div>
          </div>
          <div className="slot">
            <div>
              <img style={imgStyle} src={adminImage} alt=''/>
            </div>
            <div className="slot-content">
              <h3 style={{width:180}}>Md Abdur Rakib</h3>
              <p>Staff</p>
            </div>
          </div>
          <div className="slot">
            <div>
              <img style={imgStyle} src={adminImage} alt=''/>
            </div>
            <div className="slot-content">
              <h3 style={{width:180}}>Md Abdur Rakib</h3>
              <p>Admin</p>
            </div>
          </div>
        </div>
        <div 
        style={{
          width: "600px", 
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
        <Button 
          type="primary" 
          className='mar_l5'
          children={<span className='fwhite'>Update</span>}
          >
            </Button>
        <span className='fwhite'>Update</span>
        </div>
      </div>
      </Card>
    </div>
  )
}

export default AdminStaff