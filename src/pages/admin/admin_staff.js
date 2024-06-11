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
              <h3>Md Abdur Rakib</h3>
              <p>Admin</p>
            </div>
          </div>
          <div className="slot">
            <div>
              <img style={imgStyle} src={adminImage} alt=''/>
            </div>
            <div className="slot-content">
              <h3>Md Abdur Rakib</h3>
              <p>Staff</p>
            </div>
          </div>
          <div className="slot">
            <div>
              <img style={imgStyle} src={adminImage} alt=''/>
            </div>
            <div className="slot-content">
              <h3>Md Abdur Rakib</h3>
              <p>Admin</p>
            </div>
          </div>
        </div>
        <div 
        style={{
          width: "600px", 
          border: "1px solid rgba(7, 7, 7, 0.2)",
          marginLeft: "30px"
        }}
        >
          {/* display of admin details */}
        </div>
      </div>
      </Card>
    </div>
  )
}

export default AdminStaff