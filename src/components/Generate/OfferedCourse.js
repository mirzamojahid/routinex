import React from 'react'
import { Button, Card, List, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { generateFacultyOfferedAddAction, generateFacultyRemoveOfferedAction, generateOfferCourseSelectedAction, generateOfferCourseUnselectedAction, generateOfferSectionSelectedAction, generateOfferSectionUnselectedAction, generateOfferedAddDisableAction, generateOfferedAddEnableAction, generateOfferedEditDisableAction, generateOfferedEditEnableAction } from '../../appstate/actions/generateAction';

import TimeslotRoom from './TimeslotRoom';
import { CheckToken, clearToken } from '../../utils/auth';
import { base_endpoint, headerx } from '../../utils/constants';
import { courselistAction } from '../../appstate/actions/courseAction';
import { sectionlistAction } from '../../appstate/actions/sectionAction';

import {roomSelectedAction, roomlistAction } from '../../appstate/actions/roomAction';
const { confirm } = Modal;


function OfferedCourse({ width = 350 }) {

    const dispatch = useDispatch()
    const { offered, edit, add, activeTeacher, offer_selected_section, offer_selected_course } = useSelector((state) => state.generate);
    const { course_list } = useSelector((state) => state.course);
    const { section_list } = useSelector((state) => state.section);


    const showDeleteConfirm = (item) => {
        confirm({
            title: 'Are you sure remove from offered Course?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                deleteOfferedCourseByFaculty(item);

            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };



    const addOfferedCourseByFaculty = async (teacher, semester, section, course) => {
        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            const res = await fetch(base_endpoint + "/api/diu/offered-courses/", {
                method: "POST",
                headers: headerx,
                body: JSON.stringify({ "course": course, "section": section, "semester": semester, "teacher": teacher })
            })
            const datax = await res.json();

            console.log(datax);

            if (res.status === 201) {
                dispatch(generateOfferedAddDisableAction());
                dispatch(generateOfferCourseUnselectedAction());
                dispatch(generateOfferSectionUnselectedAction());
                dispatch(generateFacultyOfferedAddAction(datax));

            } else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }

    }


    const fetchCourses = async () => {
        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            const res = await fetch(base_endpoint + "/api/diu/courses/", {
                method: "GET",
                headers: headerx,
            })
            const datax = await res.json();

            if (res.status === 200) {
                dispatch(courselistAction(datax));
            }
            else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }
    }


    const fetchSections = async (semester = null, department = null) => {

        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            let url = base_endpoint + "/api/diu/sections/";
            let params = [];
            if (semester !== null) {
                params.push(`semester__name=${encodeURIComponent(semester)}`);
            }
            if (department !== null) {
                params.push(`department=${encodeURIComponent(department)}`);
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
                dispatch(sectionlistAction(datax));
            } else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }
    }

    const deleteOfferedCourseByFaculty = async (item) => {
        try {
            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            const res = await fetch(base_endpoint + `/api/diu/offered-courses/${item.id}/`, {
                method: "DELETE",
                headers: headerx,
            })

            if (res.status === 204) {
                dispatch(generateFacultyRemoveOfferedAction(item))
            } else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }

    }



    const FetchRoomSlot= async (floorx = null, buildingx = null, room_type = null) => {
        try {
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
        } catch (err) {
            console.log(err);
        }

    }

    return (
        <div style={{ width: width }}>
            <Card title={<div className='flex jy_sb'>
                <span>Offered Course</span>
                <Button className='mar_l5' onClick={() => {
                    fetchCourses();
                    fetchSections();
                    dispatch(generateOfferedAddEnableAction());
                }}>Add + </Button>

            </div>}>

                <Modal
                    title='Room and Timeslot Select'
                    open={edit}
                    centered
                    width={1000}
                    footer={false}
                    children={<TimeslotRoom></TimeslotRoom>}
                    onCancel={() => {
                        dispatch(generateOfferCourseUnselectedAction());
                        dispatch(generateOfferedEditDisableAction());
                    }}
                ></Modal>

                <Modal title='Offered Course add '
                    open={add} centered
                    width={1000}

                    children={
                        <div >
                            <div className='flex'>

                                <Card title="Course List" style={{ width: "50%" }}>
                                    <List pagination={true} dataSource={course_list} renderItem={(item) => {
                                        return <List.Item onClick={() => {
                                            if (item === offer_selected_course) {
                                                dispatch(generateOfferCourseUnselectedAction());
                                            } else {
                                                dispatch(generateOfferCourseSelectedAction(item));
                                            }
                                        }} style={offer_selected_course === item ? { backgroundColor: "green", color: "white" } : null}>{item.title} ({item.code}) - {item.credit}(C) - {item.course_type} - {item.department}</List.Item>
                                    }}>
                                    </List>
                                </Card>

                                <Card title="Section List" style={{ width: "50%" }}>
                                    <List pagination={true} dataSource={section_list} renderItem={(item) => {
                                        return <List.Item style={offer_selected_section === item ? { backgroundColor: "green", color: "white" } : null} onClick={() => {
                                            if (item === offer_selected_section) {
                                                dispatch(generateOfferSectionUnselectedAction());
                                            } else {
                                                dispatch(generateOfferSectionSelectedAction(item));
                                            }

                                        }}>{item.batch} {item.name} ({item.department})</List.Item>
                                    }}>
                                    </List>
                                </Card>
                            </div>

                            {offer_selected_course !== null && offer_selected_section && <Button style={{ marginTop: "10px" }} onClick={() => {
                                addOfferedCourseByFaculty(activeTeacher.id, 1, offer_selected_section.id, offer_selected_course.id);
                            }}>Add offer Course</Button>}


                        </div>}
                    footer={false} onCancel={() => {
                        dispatch(generateOfferedAddDisableAction());
                    }}>

                </Modal>
                <List dataSource={offered} renderItem={(item) => {
                    return <List.Item>
                        <div className='width flex jy_sb'>
                            <div>{item.course} ({item.section})</div>
                            <div>
                                <EditOutlined onClick={() => {
                                    FetchRoomSlot();
                                    dispatch(generateOfferCourseSelectedAction(item));
                                    dispatch(generateOfferedEditEnableAction());
                                }} style={{ fontSize: "18px" }} className='cursor mar_r5 custom_ant_icon' />
                                <DeleteOutlined onClick={() => {
                                    showDeleteConfirm(item);
                                }
                                } style={{ fontSize: "18px" }} className='mar_l5 cursor custom_ant_icon' />
                            </div>
                        </div>
                    </List.Item>
                }}></List>
            </Card>
        </div>
    )
}

export default OfferedCourse