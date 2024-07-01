import React, { useEffect } from 'react';
import {
  Card,
} from 'antd'

import { useState } from 'react';
import { CheckToken, clearToken } from '../../utils/auth';
import { base_endpoint, headerx } from '../../utils/constants';


function Profile() {


  const [staffInfo, setStaffInfo] = useState(null);


  const FetchWhoIAmInfo = async () => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      const res = await fetch(base_endpoint + "/api/account/staff/", {
        method: "POST",
        headers: headerx
      })
      const datax = await res.json();
      if (res.status === 200) {
        setStaffInfo(datax['data']);
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }

  }


  useEffect(() => {
    FetchWhoIAmInfo();
  }, [])

  return (
    <div>
      <Card hoverable title={<div className='flex jy_sb'>
        <span>Profile</span>
      </div>}>
        <div style={{ display: 'flex' }}>
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
            {staffInfo !== null && <div>

              <div style={{ marginTop: 20, display: "flex", flexDirection: "column", alignItems: "center", }}>
                <img style={{
                  height: 180,
                  width: 180,
                  borderRadius: 30,
                  border: "1px solid rgb(78, 255, 158)"
                }}
                  src={staffInfo.profile_pic} alt='' />
                <h3 style={{ marginTop: 10 }}>{staffInfo.first_name + staffInfo.last_name}</h3>
                <p>{staffInfo.user.is_admin === true ? "Admin" : "Staff"}</p>
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
            </div>}

        
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Profile