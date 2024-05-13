import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Card, Input } from 'antd';
import { List } from 'antd';
import faculty_json from '../assets/faculty.json'
import { generateSelectFacultyAction } from '../appstate/actions/generateAction';

const { Search } = Input;



function FacultyListSearch({ width = 450 }) {

    const dispatch = useDispatch();

    const { activeTeacher, faculty } = useSelector((state) => state.generate);

    const onSearch = (value, _e, info) => console.log(info?.source, value);

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
                    dataSource={faculty_json}
                    renderItem={(item) => (
                        <List.Item className={'cursor noselect'} onClick={() => {
                            dispatch(generateSelectFacultyAction(item));
                        }}>
                            <div className={item == activeTeacher ? 'flex an_center faculty_selected ' : 'flex an_center'}>
                                <img alt='' className='round' src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' width={34} height={34}></img>
                                <span>{item['Name & Initial']
                                }</span>
                            </div>
                        </List.Item>
                    )}
                />

            </Card>

        </div>
    )
}

export default FacultyListSearch