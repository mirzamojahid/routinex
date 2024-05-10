import React from 'react'
import { AutoComplete, Button, Card } from 'antd'
import { termx } from '../../../utils/constants'
import Tree from 'antd/es/tree/Tree'

function Course() {
  return (
    <div>
      <Card title={<div className='flex jy_sb'>
        <span>Course Offer List</span>
        <div className='flex'>
          <AutoComplete
            style={{
              width: 200,
            }}
            options={termx}
            placeholder="Semester by Section"
            filterOption={(inputValue, option) =>
              option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
            }
          />
          <Button className='mar_l5'>Add + </Button>
        </div>
      </div>}>
        <table className='table'>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Course Teacher & Section</th>
          </tr>

          {[0,1, 2, 3, 4, 5, 6, 7,8].map((e) => {
            if (true) {
              return <>
                <tr>
                  <th className='termx' colSpan={3}>{termx[e].value}</th>
                </tr>
                <tr>
                  <td>ENG-101</td>
                  <td>Basic Functional English </td>
                  <td>A/B(1,2)</td>
                </tr>

                <tr>
                  <td>ENG-101</td>
                  <td>Basic Functional English </td>
                  <td>A/B(1,2)</td>
                </tr>

                <tr>
                  <td>ENG-101</td>
                  <td>Basic Functional English </td>
                  <td>A/B(1,2)</td>
                </tr>
              </>
            }
            return <tr>
              <td>ENG-101</td>
              <td>Basic Functional English </td>
              <td>A/B(1,2)</td>
            </tr>
          })}

        </table>
      </Card>
    </div>
  )
}

export default Course