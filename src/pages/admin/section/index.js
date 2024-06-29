import React, { useEffect, useState } from 'react'
import { Button, Card, List, Select, Modal, Input } from 'antd'
import { base_endpoint, departmentx, headerx, semesterx } from '../../../utils/constants'
import { CheckToken, clearToken } from '../../../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { sectionDepartmentAction, sectionSemesterAction, sectionlistAction } from '../../../appstate/actions/sectionAction';


function Section() {


  const dispatch = useDispatch();
  const { section_list, section_department, section_semester } = useSelector((state) => state.section);


  const [addSection, setAddsetion] = useState(false);

  const [sectionName, setSectionName] = useState('');
  const [batchSection, setBatchSection] = useState('');
  const [semesterSection, setSemesterSection] = useState(null);
  const [departmentSection, setDepartmentSection] = useState(null);



  const FetchInfo = async (semester = null, department = null) => {

    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      let url = base_endpoint + "/api/diu/sections/";
      let params = [];
      if (semester !== null) {
        params.push(`semester__name=${encodeURIComponent(semester)}`);
      }
      if (department !== null) {
        params.push(`department=${encodeURIComponent(department)}`);
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
    } catch (err) {
      console.log(err);
    }
  }

  const CreateSectionRequest = async (semester, department, section, batch) => {

    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      let url = base_endpoint + "/api/diu/sections/";
      const res = await fetch(url, {
        method: "POST",
        headers: headerx,
        body: JSON.stringify({ "name": section, "batch": batch, "semester": 1, "department": department })

      })
      if (res.status === 201) {
        setAddsetion(false);
        setSectionName("");
        setBatchSection("");
        FetchInfo();
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      } else {
        alert("Something wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {
    if (section_list !== null && section_list.length === 0) {
      FetchInfo(section_semester, section_department);
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
              FetchInfo(value, section_department);
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
              FetchInfo(section_semester, value);
            }}

          />
          <Button onClick={() => {
            setAddsetion(true);
          }} className='mar_l5'>Add + </Button>
        </div>
      </div>}>

        <Modal width={340}
          title="New Section Add"
          open={addSection}
          centered
          footer={false}
          children={<>

            <Card>
              <Input style={{
                width: "100%",
              }} placeholder='Section Name' onChange={(e) => {
                setSectionName(e.target.value);
              }}></Input>
              <Input style={{
                width: "100%",
                marginTop: 5
              }} placeholder='Section Batch' type='number' onChange={(e) => {
                setBatchSection(e.target.value);
              }}></Input>
              <Select
                style={{
                  width: "100%",
                  marginTop: 5
                }}
                value={semesterSection}
                options={semesterx}
                onChange={(value) => {
                  setSemesterSection(value);
                }}
                placeholder="Select Semester"

              />
              <Select
                style={{
                  width: "100%",
                  marginTop: 5
                }}
                value={departmentSection}
                options={departmentx}
                placeholder="Select Department"
                onChange={(value) => {
                  setDepartmentSection(value);
                }}

              />


              <Button style={{
                width: "100%",
                marginTop: 5
              }} onClick={() => {
                if (semesterSection !== null && departmentSection !== null && sectionName !== "" && batchSection !== "") {
                  CreateSectionRequest(semesterSection, departmentSection, sectionName, batchSection);
                }

              }}>Section Create</Button>

            </Card>
          </>}
          onOk={() => {
            setAddsetion(false);
          }}
          onCancel={() => {
            setAddsetion(false);
          }}>

        </Modal>

        <List dataSource={section_list} renderItem={(item) => {
          return <List.Item onClick={() => {
          }}>{item.batch} {item.name} ({item.department})</List.Item>
        }}>
        </List>
      </Card>
    </div>
  )
}

export default Section