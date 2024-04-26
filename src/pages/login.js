/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { base_endpoint } from '../utils/constants';
import { CheckToken, setToken } from '../utils/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import UseWindowSize from '../components/UseWindowSize';
import { message } from 'antd';

function login() {


  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { width } = UseWindowSize();

  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';


  const location = useLocation();

  const LoginFunc = async (email, password) => {
    try {
      messageApi.open({
        key,
        type: 'loading',
        content: 'Loading...',
      });
      const res = await fetch(base_endpoint + "/auth0/login/", {
        method: "POST",
        headers: {
          "Accept": "*/*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const datax = await res.json();
      if (res.status === 200 && (datax["token"] !== undefined && datax["token"] !== null && datax["token"] !== "")) {
        const bool = setToken(datax["token"]);
        const tokenx = CheckToken();
        if (bool === true && tokenx === datax["token"]) {
          navigate("/admin");
        }

      } else {
        if (datax.non_field_errors !== undefined && datax.non_field_errors !== null) {
          messageApi.open({
            key,
            type: 'warning',
            content: datax.non_field_errors[0],
            duration: 2,
          });
        } else {
          messageApi.open({
            key,
            type: 'warning',
            content: datax['msg'],
            duration: 2,
          });
        }
      }
    } catch (err) {
      messageApi.open({
        key,
        type: 'error',
        content: 'error: ' + err,
        duration: 2,
      });
    }

  }




  useEffect(() => {
    if (CheckToken() !== null) {
      navigate("/");
    }


  }, [navigate, location.pathname])


  return (
    <>


      <div>
        {contextHolder}
        <div className='div_with_center'>
          <div className='loginSection' style={{ width: width < 821 ? null : "40%" }}>
            <h3 className='flex jy_center ta_center mar8'>DIU Routinex</h3>

            <form method='post' onSubmit={(e) => {
              e.preventDefault();
              if (email !== "" && password !== "") {
                LoginFunc(email, password);
              }
            }}>
              <input className='input' type='email' placeholder='Email' onChange={(e) => {
                setEmail(e.target.value);
              }}></input>
              <input className='input' type='password' placeholder='Password' onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
              <input type='submit' className='cursor login_action_btn' value="Login"></input>
            </form>

          </div>

        </div>

      </div>
   
    </>
  )
}

export default login