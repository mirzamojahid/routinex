import React from 'react'
import { Button, Card, AutoComplete, List } from 'antd'
import { batchx, semesterx } from '../../../utils/constants'


function Section() {
  return (
    <div>
      <Card title={<div className='flex jy_sb'>
        <span>Section List</span>
        <div className='flex'>
          <AutoComplete
            style={{
              width: 200,
            }}
            options={semesterx}
            placeholder="Semester by Section"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <Button className='mar_l5'>Add + </Button>
        </div>
      </div>}>

        <List dataSource={batchx} renderItem={(item) => {
          return <List.Item onClick={() => {

          }}>{item}</List.Item>
        }}>

        </List>
      </Card>
    </div>
  )
}

export default Section