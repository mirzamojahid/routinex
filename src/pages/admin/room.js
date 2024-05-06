import React from 'react'
import { AutoComplete, Button, Card, List } from 'antd'
import { departmentx } from '../../utils/constants'

function AssignedRoom() {
  return (
    <div>
      <Card title={<div className='flex jy_sb'>
        <span>Room List</span>
        <div className='flex'>
          <AutoComplete
            style={{
              width: 200,
            }}
            options={departmentx}
            placeholder="Room by Department"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <Button className='mar_l5'>Add + </Button>
        </div>
      </div>}>


        <List></List>



      </Card>
    </div>
  )
}

export default AssignedRoom