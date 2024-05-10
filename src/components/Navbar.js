import React, { useState } from 'react'
import { useNavigate, useLocation } from "react-router";
import { CheckToken } from '../utils/auth'
import { aregex, navItem } from '../utils/constants'
import '../styles/navbar.css'
import { MenuOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Drawer, Button, Avatar } from 'antd';
import UseWindowSize from './UseWindowSize';

function Navbar({ children }) {


  const { width } = UseWindowSize();
  const navigate = useNavigate();
  const router = useLocation()
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }




  return (<div>
    <nav className='nav'>

      {width < 700 && <MenuOutlined onClick={() => {
        showDrawer();
      }}></MenuOutlined>}
      <div className='flex center' style={{ justifyContent: 'space-between' }}>
        <div id='nav_logo' className='cursor' onClick={() => {
          navigate("/");
        }} width={110} height={35}>Routinex</div>
      </div>

      {width > 700 && <div>
        {router.pathname.match(aregex) ? null : navItem.map((e) => {
          return (<span onClick={() => {
            navigate(e.route);
          }} key={e.route} className={e.route === router.pathname ? "nav_item nav_active" : "nav_item"}>{e.name}</span>)
        })}
      </div>}

      <Drawer
        title="Routinex App"
        placement="left"
        closable={false}
        width={320}
        onClose={onClose}
        open={open}
      >
        <Menu
          style={{
            width: 256,
          }}
          mode="vertical"
          items={navItem.map((e) => e.name)}
          getPopupContainer={function test(node) {
            return node.parentNode;
          }}
        />


      </Drawer>

      {CheckToken() !== null && CheckToken() !== "" ?
        <><Avatar className='cursor' onClick={() => {
          navigate("/admin/")
        }} icon={<UserOutlined />} /></>
        : <Button onClick={() => {
          navigate("/login");
        }}>Login To Admin</Button>}

    </nav>
    
    {children}

  </div>)

}


export default Navbar