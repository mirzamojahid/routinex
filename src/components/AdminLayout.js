import React from 'react'
import { Layout, Menu, Avatar } from 'antd';
import { useNavigate } from 'react-router-dom';
import { LogoutOutlined, UserOutlined, ReadOutlined } from '@ant-design/icons'
import { clearToken } from '../utils/auth'
import { navItemAdmin } from '../utils/constants';
const { Header, Content,
    Sider } = Layout;


function AdminLayout({ children }) {

    const navigate = useNavigate();
    const onClick = (e) => {
        navigate(e.key)
    };


    return (
        <Layout hasSider>
            <Sider
                style={{
                    overflow: 'auto',
                    height: '95vh',
                    position: 'fixed',
                    left: 15,
                    top: 15,
                    bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.87)",
                    borderRadius: 10,
                }}
                width={260}
            >

                <div style={{ height: "80px", marginBottom: 20 }} >
                    <div class='slde_logo' onClick={() => {
                        navigate("/admin/");
                    }}> 
                        <ReadOutlined style={{fontSize:30, marginRight:10}}/> 
                        Class Routine Builder
                    </div>
                </div>

                <Menu
                    onClick={onClick}
                    className="custom-menu"
                    style={{
                        backgroundColor: 'transparent',
                        paddingLeft: 12,
                        paddingRight: 12,
                    }}
                    mode="inline" defaultSelectedKeys={['/admin/routine']} items={navItemAdmin}
                />
            </Sider>

            <Layout
                style={{
                    marginLeft: 280,
                    marginRight: 30,
                    marginTop: 20,
                }}
            >
                <Header
                    style={{
                        padding: 0,
                        background: 'white',
                        marginLeft: 15,
                        borderRadius: 10,
                        marginRight: 15,
                    }}
                    children={
                        <div className='flex jy_sb' style={{ height: "100%" }}>
                            <div></div>
                            <div className='flex an_center' >
                                <Avatar
                                    style={{
                                        marginRight:10
                                    }}
                                    icon={<UserOutlined />}
                                />
                                <Avatar
                                    style={{
                                        backgroundColor: '#ffc6c6',
                                        marginRight:15
                                    }}
                                    icon={<LogoutOutlined/>}
                                    onClick={() => {
                                        clearToken();
                                        navigate("/");
                                    }}
                                    className='cursor'
                                />
                            </div>
                        </div>
                    }

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