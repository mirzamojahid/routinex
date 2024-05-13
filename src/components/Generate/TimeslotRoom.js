import React from 'react'
import {
    AutoComplete,
    Button,
    Card,
    List,
    Row,
    Col,
    Drawer,
} from 'antd'
import { departmentx } from '../../utils/constants'
import { useState } from 'react';


const roomStyle = {
    background: '#0092ff',
    padding: '8px 8px',
    textAlign: 'center',
    height: 80,
    borderRadius: 5,
    border: 'none'
};

const slotStyle = {
    background: 'rgb(95, 247, 95)',
    padding: "15px 20px",
    margin: 10,
    color: "white",
    borderRadius: 5
}


function TimeslotRoom() {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return (
        <div> <Card hoverable title={<div className='flex jy_sb'>
            <span>Rooms</span>
            <div className='flex'>
                <AutoComplete
                    style={{
                        width: 200,
                        marginRight: 20
                    }}
                    options={departmentx}
                    placeholder="Room by Department"
                    filterOption={(inputValue, option) =>
                        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                />
                <Button
                    style={{ width: 150 }}
                    type="primary"
                    className='mar_l5'
                    onClick={showDrawer}
                    children={<span className='fwhite'>Add Room + </span>}
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
            <div style={{ display: 'flex' }}>
                <div
                    style={{
                        width: '600px',
                        height: "80vh",
                        border: '1px solid rgba(7, 7, 7, 0.2)',
                        padding: 10,
                    }}
                >
                    <Row gutter={[16, 24]}>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6}>
                            <Card hoverable style={{ ...roomStyle, background: "rgb(252, 57, 57)" }} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col className="gutter-row" span={6} >
                            <Card hoverable style={roomStyle} className='fwhite'>KT-803</Card>
                        </Col>
                        <Col span={8}>
                        </Col>
                    </Row>

                </div>
                <div
                    style={{
                        width: "400px",
                        border: "1px solid rgba(7, 7, 7, 0.2)",
                        marginLeft: "30px"
                    }}
                >
                    <List>
                        <div>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={{ ...slotStyle, background: "rgb(255, 60, 60)" }}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                            <p style={slotStyle}>08:30:00 AM to 09:45:00 PM - (KT-402)</p>
                        </div>
                    </List>
                </div>
            </div>
        </Card></div>
    )
}

export default TimeslotRoom