import React, { useEffect } from 'react'
import {
  Button,
  Card,
  List,
  Row,
  Col,
  Drawer,
  Select,
} from 'antd'
import { CheckToken, clearToken } from '../../utils/auth'

import { building, floor, days, base_endpoint, headerx, roomtype } from '../../utils/constants'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buildingRoomAction, daySelectedRoomAction, floorRoomAction, roomSelectedAction, roomlistAction, selectedTypeRoomAction } from '../../appstate/actions/roomAction';


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

function AssignedRoom() {

  const dispatch = useDispatch()
  const {room_type, selected, room, floor_selected, building_selected, day_selected } = useSelector((state) => state.room);


  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const buildingChange = (value) => {
    dispatch(buildingRoomAction(value));
  };

  const floorChange = (value) => {
    dispatch(floorRoomAction(value));
  };

  const dayChange = (value) => {
    dispatch(daySelectedRoomAction(value));
  };


  const FetcInfo = async (floorx = null, buildingx = null,room_type=null) => {
   try{
    headerx['Authorization'] = `Bearer ${CheckToken()}`;
    let url = base_endpoint + "/api/diu/rooms/";
    let params = [];
    if (floorx !== null) {
      params.push(`floor=${encodeURIComponent(floorx)}`);
    }
    if (buildingx !== null) {
      params.push(`building=${encodeURIComponent(buildingx)}`);
    }
    if (room_type !== null) {
      params.push(`type=${encodeURIComponent(room_type)}`);
    }
    

    if (params.length > 0) {
      url += '?' + params.join('&')
    }
    const res = await fetch(url, {
      method: "GET",
      headers: headerx,

    })
    const datax = await res.json();
    if (res.status === 200) {
      dispatch(roomSelectedAction(null));
      dispatch(roomlistAction(datax));
    } else if (res.status === 401) {
      clearToken();
      window.location.href = "/login";
    }
   }catch(err){
    console.log(err);
   }

  }


  useEffect(() => {
    if (room == null || room.length == 0) {
      FetcInfo();
    }

  }, []);

  return (
    <div>
      <Card hoverable title={<div className='flex jy_sb'>
        <span>Rooms</span>
        <div className='flex'>
          <Select
            style={{
              width: 150,
              marginRight: 5
            }}
            showSearch
            placeholder="Select building"
            optionFilterProp="children"
            onChange={buildingChange}
            options={building}
          />
          <Select
            style={{
              width: 150,
            }}
            showSearch
            placeholder="Select floor"
            optionFilterProp="children"
            onChange={floorChange}
            options={floor}
          />

          <Select
            style={{
              width: 150,
              marginLeft:5
            }}
            showSearch
            placeholder="Room Type"
            optionFilterProp="children"
            value={room_type}
            onChange={(value)=>{
              dispatch(selectedTypeRoomAction(value));
            }}
            options={roomtype}
          />
          
          <Button
            style={{ width: 150 }}
            type="primary"
            className='mar_l5'
            onClick={() => {
              if (floor_selected !== null || building_selected !== null || room_type) {
                FetcInfo(floor_selected, building_selected,room_type);
              }
            }}
            children={<span className='fwhite'>Search</span>}
          >
          </Button>

          <Button
            style={{ width: 150, backgroundColor: "rgb(95, 247, 95)" }}
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
              {room !== null && room.map((e) => {
                return (<Col key={`room_${e.id}`} onClick={() => {
                  if (selected == e) {
                    dispatch(roomSelectedAction(null));
                  } else {
                    dispatch(roomSelectedAction(e));
                  }
                }} className="gutter-row" span={6}>
                  <Card hoverable style={selected == e ? { ...roomStyle, background: "rgb(252, 57, 57)" } : roomStyle} className='fwhite'>{e.building}-{e.room_number} ({e.type})</Card>
                </Col>);
              })}

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
              {selected !== null && <div>
                <Select
                  style={{
                    maxWidth: "100%",
                    minWidth: "95%",
                    marginTop: 8,
                    marginLeft: 8,
                    marginRight: 8
                  }}
                  showSearch
                  placeholder="Select day"
                  optionFilterProp="children"
                  onChange={dayChange}
                  value={day_selected}
                  options={days}
                />
                {selected.room_slots

                  .filter((e) => {
                    if (day_selected !== null) {
                      return e.day == day_selected;
                    }
                    return e;
                  }).map((e) => {
                    const slotx = e.slot;
                    return (<p key={`timeslot_${e.id}`} style={e.is_available == true ? slotStyle : { ...slotStyle, background: "rgb(255, 60, 60)" }}>{e.day}. {slotx.start_at} to {slotx.end_at}- ({selected.building}-{selected.room_number})</p>
                    );
                  })}
              </div>}
            </List>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default AssignedRoom