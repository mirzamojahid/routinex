import React from 'react'
import { Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined } from '@ant-design/icons'
import { clearToken } from '../utils/auth'
const { Header, Content,
    Sider } = Layout;


const sideItems = [
    { "label": "Routine", "key": "/admin/routine" }, { "label": "Course Offer", "key": "/admin/course" }, { "label": "Faculty", "key": "/admin/faculty" }, { "label": "Room Assigned", "key": "/admin/room" }, { "label": "Generate", "key": "/admin/generate" }
]

function AdminLayout({ children }) {


    const navigate = useNavigate();

    const {
        token: { colorBgContainer },
    } = theme.useToken();


    const onClick = (e) => {
        navigate(e.key)
    };
    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    backgroundColor: "white"
                }}
            >

                <div style={{ height: "65px" }} >
                    <div class='slde_logo' onClick={() => {
                        navigate("/admin/");
                    }} width={110} height={35} >Routinex</div>
                </div>

                <Menu onClick={onClick}
                    mode="inline" defaultSelectedKeys={['/admin/routine']} items={sideItems} />
            </Sider>

            <Layout
                style={{
                    marginLeft: 200,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                    children={<div className='flex jy_sb' style={{ height: "100%" }}>
                        <div></div>
                        <div className='flex an_center' >
                            <LogoutOutlined style={{ fontSize: "24px", marginRight: "20px" }} onClick={() => {
                                clearToken();
                                navigate("/");
                            }} className='cursor' />  </div>                  </div>}

                />

                <Content
                    style={{
                        margin: '24px 16px 0',
                        overflow: 'initial',
                    }}
                >
                    {children}
                </Content>

            </Layout>
        </Layout>
    )
}

export default AdminLayout