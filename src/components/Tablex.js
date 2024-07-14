import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Input, Modal, Select, Space, Table } from 'antd';
import fahad from '../images/fahadsir.jpeg'
import { base_endpoint, departmentx, facultyx, headerx } from '../utils/constants';
import { CheckToken, clearToken } from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { teacherlistAction } from '../appstate/actions/teacherAction';

const { Column } = Table;


function Tablex() {


  const dispatch = useDispatch()
  const { teacher_list, teacher_selected, teacher_department } = useSelector((state) => state.teacher);

  const [addPopup, setPopup] = useState(false);

  const [teacherName, setTeacherName] = useState('');
  const [teacherInital, setTeacherInitial] = useState('');
  const [employeeIdTeacher, setEmployeeIdTeacher] = useState('');
  const [departmentTeacher, setDepartmentTeacher] = useState(null);
  const [phoneTeacher, setPhoneTeacher] = useState('');
  const [portfolioTeacher, setPortfolioTeacher] = useState('');
  const [facultyTeacher, setFacultyTeacher] = useState(null);
  const [cellphoneTeacher, setCellphoneTeacher] = useState('');
  const [designationTeacher, setDesignationTeacher] = useState('');
  const [emailTeacher, setEmailTeacher] = useState('');




  const FetchInfo = async () => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      const res = await fetch(base_endpoint + "/api/diu/teachers/", {
        method: "GET",
        headers: headerx
      })
      const datax = await res.json();
      if (res.status === 200) {
        dispatch(teacherlistAction(datax));
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }

  }



  const CreateTeacherRequest = async (email, designation, department, faculty, name, initial, employee_id, phone, cellphone, portfolio) => {

    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      let url = base_endpoint + "/api/diu/teachers/";
      const res = await fetch(url, {
        method: "POST",
        headers: headerx,
        body: JSON.stringify({
          "name": name,
          "initial": initial,
          "email": email,
          "phone": phone,
          "cellphone": cellphone,
          "employee_id": employee_id,
          "designation": designation,
          "department": department,
          "faculty": faculty,
          "portfolio": portfolio
        })

      })

      const datax=res.json();
      if (res.status === 201) {
        setPopup(false);
        setTeacherInitial("");
        setTeacherName("");
        FetchInfo();
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      } else {
        alert("Somthing wrong !");
      }
    } catch (err) {
      console.log(err);
    }
  }



  useEffect(() => {

    if (teacher_list !== null && teacher_list.length === 0) {
      FetchInfo();
    }
  }, []);


  return (
    <div>

      <Button style={{ marginBottom: "8px", height: "40px" }} onClick={() => {
        setPopup(true);
      }}>Faculty Member Add + </Button>

      <Modal width={340}
        title="New Teacher Add"
        open={addPopup}
        centered
        footer={false}
        children={<>

          <Card>
            <Input style={{
              width: "100%",
            }} placeholder='Teacher Name' onChange={(e) => {
              setTeacherName(e.target.value);
            }}></Input>

            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Teacher Initial' onChange={(e) => {
              setTeacherInitial(e.target.value);
            }}></Input>



            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Email' type='string' onChange={(e) => {
              setEmailTeacher(e.target.value);
            }}></Input>


            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Designation' type='string' onChange={(e) => {
              setDesignationTeacher(e.target.value);
            }}></Input>

            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Cellphone Number' type='string' onChange={(e) => {
              setCellphoneTeacher(e.target.value);
            }}></Input>

            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder="Phone" type='string' onChange={(e) => {
              setPhoneTeacher(e.target.value);
            }}></Input>


            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Employee ID' type='number' onChange={(e) => {
              setEmployeeIdTeacher(e.target.value);
            }}></Input>


            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Portifolio Link' type='string' onChange={(e) => {
              setPortfolioTeacher(e.target.value);
            }}></Input>


            <Select
              style={{
                width: "100%",
                marginTop: 5
              }}
              value={departmentTeacher}
              options={departmentx}
              placeholder="Select Department"
              onChange={(value) => {
                setDepartmentTeacher(value);
              }}

            />


            <Select
              style={{
                width: "100%",
                marginTop: 5
              }}
              value={facultyTeacher}
              options={facultyx}
              placeholder="Select Faculty"
              onChange={(value) => {
                setFacultyTeacher(value);
              }}

            />


            <Button style={{
              width: "100%",
              marginTop: 5
            }} onClick={() => {

              if (teacherName !== "" && teacherInital !== "" && emailTeacher !== "" && facultyTeacher !== null && departmentTeacher !== null && phoneTeacher !== "" && cellphoneTeacher !== "" && portfolioTeacher !== "" && employeeIdTeacher !== "" && designationTeacher !== "") {
                CreateTeacherRequest(emailTeacher, departmentTeacher, departmentTeacher, facultyTeacher, teacherName, teacherInital, employeeIdTeacher, phoneTeacher, cellphoneTeacher, portfolioTeacher);
              } else {
                alert("Make sure all fields are filup");
              }

            }}>Teacher Create</Button>

          </Card>
        </>}
        onOk={() => {
          setPopup(false);
        }}
        onCancel={() => {
          setPopup(false);
        }}>

      </Modal>
      <Table dataSource={teacher_list} >
        <Column title="Full Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column title="Designation" dataIndex="designation" key="designation" />
        <Column title="Employee ID" dataIndex="employee_id" key="employee_id" />
{/* 
        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Button>View</Button>
          )}
        /> */}
      </Table>
    </div>
  )
}

export default Tablex