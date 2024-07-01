import { Button, Card, Input, List, Modal } from 'antd'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { CheckToken, clearToken } from '../../utils/auth';
import { base_endpoint, headerx } from '../../utils/constants';
import { addPopupDisableSemesterAction, addPopupEnableSemesterAction, semesterlistAction } from '../../appstate/actions/semesterAction';



export const FetchSemesterInfo = async ({ dispatch }) => {
    try {
        headerx['Authorization'] = `Bearer ${CheckToken()}`;
        let url = base_endpoint + "/api/diu/semesters/";


        const res = await fetch(url, {
            method: "GET",
            headers: headerx,
        })
        const datax = await res.json();
        if (res.status === 200) {
            dispatch(semesterlistAction(datax));

        } else if (res.status === 401) {
            clearToken();
            window.location.href = "/login";
        }
    } catch (err) {
        console.log(err);
    }

}

function SemesterPage() {



    const dispatch = useDispatch()
    const { semester_list, addPopup } = useSelector((state) => state.semester);

    const [semesterName, setSemesterName] = useState("");



    const CreateRequest = async (name) => {

        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            let url = base_endpoint + "/api/diu/semesters/";
            const res = await fetch(url, {
                method: "POST",
                headers: headerx,
                body: JSON.stringify({
                    "name": name,
                })

            })
            if (res.status === 201) {
                FetchSemesterInfo({ dispatch: dispatch })
                dispatch(addPopupDisableSemesterAction());
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




    useEffect(() => {
        if (semester_list !== null && semester_list.length === 0) {
            FetchSemesterInfo({ dispatch: dispatch });
        }
    })

    return (
        <div>


            <Modal width={340}
                title="New Semester Add"
                open={addPopup}
                centered
                footer={false}
                children={<>

                    <Card>
                        <Input style={{
                            width: "100%",
                        }} placeholder='Semester Name' onChange={(e) => {
                            setSemesterName(e.target.value);
                        }}></Input>


                        <Button style={{
                            width: "100%",
                            marginTop: 5
                        }} onClick={() => {
                            if (semesterName !== "") {
                                CreateRequest(semesterName)
                            }

                        }}>Semester Create</Button>

                    </Card>
                </>}
                onOk={() => {
                    dispatch(addPopupDisableSemesterAction())

                }}
                onCancel={() => {
                    dispatch(addPopupDisableSemesterAction())

                }}>

            </Modal>




            <Card title={<div className='flex jy_sb'>
                <span>Semester List</span>

                <Button
                    style={{ width: 150, backgroundColor: "rgb(95, 247, 95)" }}
                    type="primary"
                    className='mar_l5'
                    onClick={() => {
                        dispatch(addPopupEnableSemesterAction())
                    }}
                    children={<span className='fwhite'>Add Semester + </span>}
                >
                </Button>

            </div>} >
                <List dataSource={semester_list} renderItem={(item, index) => {
                    return (<List.Item key={`semester_${index}`}>
                        {item.name}
                    </List.Item>)
                }}></List>
            </Card>
        </div>
    )
}

export default SemesterPage