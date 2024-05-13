import React from 'react'
import { Button, Card, List, Modal } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { ExclamationCircleFilled } from '@ant-design/icons';

const coursex = ["Digital Image Processing", "Big Data & IoT", "Big Data & IoT Lab", "Software Engineering", "Algortithm", "Algorithm Lab"];

const { confirm } = Modal;


function OfferedCourse({ width = 350 }) {

    const showDeleteConfirm = () => {
        confirm({
            title: 'Are you sure remove from offered Course?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
            okText: 'Yes',
            okType: 'danger',
            cancelText: 'No',
            onOk() {
                console.log('OK');
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

                <List dataSource={coursex} renderItem={(item) => {
                    return <List.Item>
                        <div className='width flex jy_sb'>
                            <div>{item}</div>
                            <div>
                                <EditOutlined  style={{ fontSize: "18px" }} className='cursor mar_r5 custom_ant_icon' />
                                <DeleteOutlined onClick={() => {
                                    showDeleteConfirm();
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