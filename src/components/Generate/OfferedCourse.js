import React from 'react'
import { Button, Card, List, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ExclamationCircleFilled } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { generateFacultyRemoveOfferedAction, generateOfferedEditDisableAction, generateOfferedEditEnableAction } from '../../appstate/actions/generateAction';
import TimeslotRoom from './TimeslotRoom';


const { confirm } = Modal;


function OfferedCourse({ width = 350 }) {

    const dispatch = useDispatch()
    const { offered, edit } = useSelector((state) => state.generate);

    const showDeleteConfirm = (item) => {
        confirm({
            title: 'Are you sure remove from offered Course?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                dispatch(generateFacultyRemoveOfferedAction(item))
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };

    return (
        <div style={{ width: width }}>
            <Card title={<div className='flex jy_sb'>
                <span>Offered Course</span>
                <Button className='mar_l5'>Add + </Button>

            </div>}>

                <Modal
                    title='Room and Timeslot Select'
                    open={edit}
                    centered
                    width={1000}
                    footer={false}
                    children={<TimeslotRoom></TimeslotRoom>}
                    onCancel={() => {
                        dispatch(generateOfferedEditDisableAction());
                    }}
                ></Modal>


                <List dataSource={offered} renderItem={(item) => {
                    return <List.Item>
                        <div className='width flex jy_sb'>
                            <div>{item}</div>
                            <div>
                                <EditOutlined onClick={() => {
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