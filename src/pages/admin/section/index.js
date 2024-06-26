import React, { useEffect } from 'react'
import { Button, Card, List, Select } from 'antd'
import { base_endpoint, departmentx, headerx, semesterx } from '../../../utils/constants'
import { CheckToken, clearToken } from '../../../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { sectionDepartmentAction, sectionSemesterAction, sectionlistAction } from '../../../appstate/actions/sectionAction';


function Section() {


  const dispatch = useDispatch()
  const { section_list, section_department, section_semester } = useSelector((state) => state.section);

  const FetchInfo = async (semester = null, department = null) => {
    headerx['Authorization'] = `Bearer ${CheckToken()}`;
    let url = base_endpoint + "/api/diu/sections/";
    let params = [];
    if (semester !== null) {
      params.push(`semester__name=${encodeURIComponent(semester)}`);
    }
    if (department !== null) {
      params.push(`department__name=${encodeURIComponent(department)}`);
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

  }


  useEffect(() => {
    if(section_list !==null && section_list.length === 0){
      FetchInfo(section_semester,section_department);
    }
  }, [])

  return (
    <div>
      <Card title={<div className='flex jy_sb'>
        <span>Section List</span>
        <div className='flex'>
          <Select
            style={{
              width: 200,
              marginRight: 5
            }}
            value={section_semester}
            options={semesterx}
            onChange={(value) => {
              dispatch(sectionSemesterAction(value));
              FetchInfo(value,section_department);
            }}
            placeholder="Select Semester"
         
          />

          <Select
            style={{
              width: 200,
            }}
            value={section_department}
            options={departmentx}
            placeholder="Select Department"
            onChange={(value) => {
              dispatch(sectionDepartmentAction(value));
              FetchInfo(section_semester,value);
            }}
            
          />
          <Button className='mar_l5'>Add + </Button>
        </div>
      </div>}>

        <List dataSource={section_list} renderItem={(item) => {
          return <List.Item onClick={() => {
          }}>{item.batch} {item.name} ({item.department.name})</List.Item>
        }}>
        </List>
      </Card>
    </div>
  )
}

export default Section