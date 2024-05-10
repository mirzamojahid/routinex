import React from 'react'
import { Button, Card, List } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'

const coursex = ["Digital Image Processing", "Big Data & IoT", "Big Data & IoT Lab", "Software Engineering", "Algortithm", "Algorithm Lab"];


function OfferedCourse({ width = 350 }) {
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
                                <EditOutlined style={{ fontSize: "18px" }} className='cursor mar_r5' />
                                <DeleteOutlined style={{ fontSize: "18px" }} className='mar_l5 cursor' />
                            </div>
                        </div>
                    </List.Item>
                }}></List>
            </Card>
        </div>
    )
}

export default OfferedCourse