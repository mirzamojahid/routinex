import React, { useEffect } from 'react'
import {
  Button,
  Card,
  List,
  Drawer,
  Select,
  Input,
} from 'antd'
import { base_endpoint, headerx, roles } from '../../utils/constants';
import { useState } from 'react';
import { CheckToken } from '../../utils/auth';

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

  const [staffInfo, setStaffInfo] = useState(null);
  const [listStaffInfo, setListStaffInfo] = useState([]);

  const onClose = () => {
    setOpen(false);
  };

  const searchName = (value) => {
    console.log(`selected ${value}`);
  };

  const roleChange = (value) => {
    console.log(`selected ${value}`);
  };


  const FetchStaffInfo = async () => {
    headerx['Authorization'] = `Bearer ${CheckToken()}`;
    const res = await fetch(base_endpoint + "/api/account/staff/", {
      method: "POST",
      headers: headerx
    })
    const datax = await res.json();
    if (res.status == 200) {
      setStaffInfo(datax['data']);
      setListStaffInfo(datax['list']);
    }

  }


  useEffect(() => {
    FetchStaffInfo();
  }, []);
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
            style={{ width: 150 }}
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

        {staffInfo != null ? <div style={{ display: 'flex' }}>
          <div
            style={{
              width: '350px',
              height: "80vh",
              border: '1px solid rgba(7, 7, 7, 0.2)',
              overflow: "auto",
            }}
          >

            {listStaffInfo.map((e) => {
              return <div className="slot">
                <div>
                  <img style={imgStyle} src={e.profile_pic} alt='' />
                </div>
                <div className="slot-content">
                  <h3 style={{ width: 180 }}>{e.first_name + e.last_name}</h3>
                  <p>{e.user.is_admin ==true ?"Admin":"Staff"}</p>
                </div>
              </div>;
            })}


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
            <div style={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center", }}>
              <img style={{
                height: 180,
                width: 180,
                borderRadius: 30,
                border: "1px solid rgb(78, 255, 158)"
              }}
                src={staffInfo.profile_pic} alt='' />
              <h3 style={{ marginTop: 10 }}>{staffInfo.first_name + staffInfo.last_name}</h3>
              <p>{staffInfo.user.is_admin == true ? "Admin" : "Staff"}</p>
            </div>
            <div style={{ paddingLeft: 40 }}>
              <div style={{ display: "flex", margin: 15 }}>
                <h3 style={{ width: 180 }}>User Name:</h3>
                <p>{staffInfo.user.username}</p>
              </div>
              <div style={{ display: "flex", margin: 15 }}>
                <h3 style={{ width: 180 }}>Email:</h3>
                <p>{staffInfo.user.email}</p>
              </div>
              <div style={{ display: "flex", margin: 15 }}>
                <h3 style={{ width: 180 }}>Phone Number:</h3>
                <p>{staffInfo.phone_number}</p>
              </div>
              <div style={{ display: "flex", margin: 15 }}>
                <h3 style={{ width: 180 }}>Joined Date:</h3>
                <p>{new Date(staffInfo.created_at).toDateString()}</p>
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
        </div> : null}

      </Card>
    </div>
  )
}

export default AdminStaff