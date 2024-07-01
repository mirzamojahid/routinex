import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from 'antd';
import { List } from 'antd';
import { generateFacultyListAction, generateFacultyOfferedAction, generateSelectFacultyAction } from '../appstate/actions/generateAction';
import { CheckToken, clearToken } from '../utils/auth';
import { base_endpoint, headerx } from '../utils/constants';

const { Search } = Input;

export const OfferedCourseByFaculty = async (dispatch, employee_id) => {
    headerx['Authorization'] = `Bearer ${CheckToken()}`;
    const res = await fetch(base_endpoint + "/api/diu/offered-courses/?teacher__id=" + employee_id, {
        method: "GET",
        headers: headerx
    })
    const datax = await res.json();

    if (res.status === 200) {
        dispatch(generateFacultyOfferedAction(datax));
    }

}


function FacultyListSearch({ width = 450 }) {

    const dispatch = useDispatch();

    const { activeTeacher, faculty } = useSelector((state) => state.generate);

    const onSearch = (value, _e, info) => {
        FetchInfo({initial:value});
    };

    const FetchInfo = async ({ initial = null }) => {
        try {

            let url = base_endpoint + "/api/diu/teachers/";


            let params = [];
            if (initial !== null) {
                params.push(`initial=${encodeURIComponent(initial)}`);
            }
            if (params.length > 0) {
                url += '?' + params.join('&')
            }


            headerx['Authorization'] = `Bearer ${CheckToken()}`;
            const res = await fetch(url, {
                method: "GET",
                headers: headerx
            })
            const datax = await res.json();
            if (res.status === 200) {
                dispatch(generateFacultyListAction(datax))
            } else if (res.status === 401) {
                clearToken();
                window.location.href = "/login";
            }
        } catch (err) {
            console.log(err);
        }

    }

    useEffect(() => {
        FetchInfo({});
    }, []);

    return (
        <div style={{ width: width }}>
            <Card>
                <Search className='custom_ant_icon' style={{
                    width: "100%",
                }}
                    height={60}
                    allowClear

                    placeholder='Search by Teacher Full Initial' onSearch={onSearch}></Search>

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
                            OfferedCourseByFaculty(dispatch, item.id);
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