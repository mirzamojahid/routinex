import { Button, Drawer, Input, Select } from 'antd'
import React, { useState } from 'react'
import { base_endpoint, building, floor, headerx, roomtype } from '../utils/constants';
import { CheckToken, clearToken } from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { addPopupDisableRoomAction } from '../appstate/actions/roomAction';
import { FetchRoomInfo } from '../pages/admin/room';

function AddRoom() {


    const dispatch = useDispatch();

    const { room_type, floor_selected, building_selected, addPopup } = useSelector((state) => state.room);



    const [roomNumber, setRoomnumber] = useState('');
    const [buildingRoom, setBuildingRoom] = useState(null);
    const [typeRoom, setTypeRoom] = useState(null);
    const [floorRoom, setFloorRoom] = useState(null);
    const [capacityRoom, setCapacityRoom] = useState(50);



    const CreateRequest = async (room_number, building, floor, type, capacity) => {

        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            let url = base_endpoint + "/api/diu/rooms/";
            const res = await fetch(url, {
                method: "POST",
                headers: headerx,
                body: JSON.stringify({
                    "room_number": room_number,
                    "building": building,
                    "floor": floor,
                    "type": type,
                    "capacity": capacity
                })

            })
            if (res.status === 201) {
                FetchRoomInfo({ dispatch: dispatch, room_type: room_type, floorx: floor_selected, buildingx: building_selected })
                dispatch(addPopupDisableRoomAction());

            } else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            } else {
                alert("Something wrong");
            }
        } catch (err) {
            console.log(err);
        }
    }




    return (
        <Drawer
            title="Add Room"
            width={400}
            onClose={() => {
                dispatch(addPopupDisableRoomAction())
            }}
            open={addPopup}
        >

            <Input type='number' value={roomNumber} style={{
                width: "100%",
            }} placeholder='Room Number' onChange={(e) => {
                setRoomnumber(e.target.value);

            }}></Input>


            <Select
                style={{
                    width: "100%",
                    marginTop: 5
                }}
                showSearch
                placeholder="Select building"
                optionFilterProp="children"
                onChange={(value) => {
                    setBuildingRoom(value);
                }}
                options={building}
            />

            <Select
                style={{
                    width: "100%",
                    marginTop: 5
                }}
                value={floorRoom}
                options={floor}
                placeholder="Building Floor"
                onChange={(value) => {
                    setFloorRoom(value);
                }}
            />


            <Select
                style={{
                    width: "100%",
                    marginTop: 5
                }}
                value={typeRoom}
                options={roomtype}
                placeholder="Room Type"
                onChange={(value) => {
                    setTypeRoom(value);
                }}
            />


            <Input value={capacityRoom} style={{
                width: "100%",
                marginTop: 5
            }} placeholder='Room Capacity' onChange={(e) => {
                setCapacityRoom(e.target.value);

            }}></Input>

            <Button style={{
                width: "100%",
                marginTop: 5
            }} onClick={() => {
                if (floorRoom !== null && roomtype !== null && roomNumber !== "" && buildingRoom !== null) {
                    CreateRequest(roomNumber, buildingRoom, floorRoom, typeRoom, capacityRoom);
                }

            }}>Room Create</Button>


        </Drawer>)
}

export default AddRoom