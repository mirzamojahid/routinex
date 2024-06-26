import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from 'antd';
import { List } from 'antd';
import faculty_json from '../assets/faculty.json'
import { generateFacultyListAction, generateFacultyOfferedAction, generateSelectFacultyAction } from '../appstate/actions/generateAction';
import { CheckToken } from '../utils/auth';
import { base_endpoint, headerx } from '../utils/constants';

const { Search } = Input;



function FacultyListSearch({ width = 450 }) {

    const dispatch = useDispatch();

    const { activeTeacher, faculty } = useSelector((state) => state.generate);

    const onSearch = (value, _e, info) => console.log(info?.source, value);

    const FetchInfo = async () => {
        headerx['Authorization'] = `Bearer ${CheckToken()}`;
        const res = await fetch(base_endpoint + "/api/diu/teachers/", {
            method: "GET",
            headers: headerx
        })
        const datax = await res.json();
        if (res.status === 200) {
            dispatch(generateFacultyListAction(datax))
        }

    }



    const OfferedCourseByFaculty = async (employee_id) => {
        headerx['Authorization'] = `Bearer ${CheckToken()}`;
        const res = await fetch(base_endpoint + "/api/diu/offered-courses/?teacher__id=" + employee_id, {
            method: "GET",
            headers: headerx
        })
        const datax = await res.json();
        if (res.status === 200) {
            dispatch(generateFacultyOfferedAction(["Digital Image Processing", "Big Data & IoT", "Big Data & IoT Lab", "Software Engineering", "Algortithm", "Algorithm Lab"]));
        }

    }


    useEffect(() => {
        FetchInfo();
    }, []);

    return (
        <div style={{ width: width }}>
            <Card>
                <Search className='custom_ant_icon' style={{
                    width: "100%",
                }}
                    height={60}
                    allowClear
                    placeholder='Search by Full Name | Initial' onSearch={onSearch}></Search>

                <List
                    itemLayout="vertical"
                    size="large"

                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }}
                    dataSource={faculty}
                    renderItem={(item) => (
                        <List.Item className={'cursor noselect'} onClick={() => {
                            dispatch(generateSelectFacultyAction(item));
                            OfferedCourseByFaculty(item.employee_id);
                        }}>
                            <div className={item === activeTeacher ? 'flex an_center faculty_selected ' : 'flex an_center'}>
                                <img alt='' className='round' src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' width={34} height={34}></img>
                                <span>{item.name} - {item.initial
                                } ({item.employee_id})</span>
                            </div>
                        </List.Item>
                    )}
                />

            </Card>

        </div>
    )
}

export default FacultyListSearch