import React, { useEffect, useState } from 'react'
import { Button, Card, Input, List, Modal, Select } from 'antd'
import { base_endpoint, departmentx, headerx, roomtype, semesterx } from '../../../utils/constants'
import { CheckToken, clearToken } from '../../../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { courseDepartmentAction, courseSemesterAction, courselistAction } from '../../../appstate/actions/courseAction';
import { FetchSemesterInfo } from '../semester_page';


function Course() {

  const dispatch = useDispatch()
  const { course_list,
    course_department, course_semester } = useSelector((state) => state.course);
  const { semester_list } = useSelector((state) => state.semester);


  const [addPopup, setPopup] = useState(false);

  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [credit, setCredit] = useState(1);
  const [department, setDepartment] = useState(null);
  const [course_type, setCourse_type] = useState(null);
  const [semesterCourse, setSemesterCourse] = useState(null);


  const CreateCourseRequest = async (title, code, description, credit, department, course_type, semester_id) => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      let url = base_endpoint + "/api/diu/courses/";
      const res = await fetch(url, {
        method: "POST",
        headers: headerx,
        body: JSON.stringify({
          "title": title,
          "code": code,
          "description": description,
          "credit": credit,
          "department": department,
          "course_type": course_type,
          "semester": semester_id
        })

      })

      const datax = res.json();
      console.log(datax);
      if (res.status === 201) {
        FetchInfo({ semester: course_semester, department: course_department });
        setPopup(false);
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



  const FetchInfo = async ({ semester, department }) => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      let url = base_endpoint + "/api/diu/courses/";


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
        dispatch(courselistAction(datax));
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(() => {

    if (course_list !== null && course_list.length === 0) {
      FetchInfo({ semester: course_semester, department: course_department });
    }
  }, [])


  return (
    <div>

      <Modal width={340}
        title="New Course Add"
        open={addPopup}
        centered
        footer={false}
        children={<>

          <Card>
            <Input style={{
              width: "100%",
            }} placeholder='Course Title' onChange={(e) => {
              setTitle(e.target.value);
            }}></Input>

            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Course Code' onChange={(e) => {
              setCode(e.target.value);
            }}></Input>



            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Course Credit' type='number' onChange={(e) => {
              setCredit(e.target.value);
            }}></Input>


            <Input style={{
              width: "100%",
              marginTop: 5
            }} placeholder='Course Description' type='string' onChange={(e) => {
              setDescription(e.target.value);
            }}></Input>

            <Select
              style={{
                width: "100%",
                marginTop: 5
              }}
              value={department}
              options={departmentx}
              placeholder="Select Department"
              onChange={(value) => {
                setDepartment(value);
              }}

            />


            <Select
              style={{
                width: "100%",
                marginTop: 5
              }}
              options={semester_list}
              placeholder="Select Semester"
              onChange={(value) => {
                semester_list.filter((e) => {

                  if (e.value === value) {
                    console.log(e.id);
                    setSemesterCourse(e.id);
                    return 0;
                  }
                })
              }}

            />


            <Select
              style={{
                width: "100%",
                marginTop: 5
              }}
              value={course_type}
              options={roomtype}
              placeholder="Course Type"
              onChange={(value) => {
                setCourse_type(value);
              }}

            />


            <Button style={{
              width: "100%",
              marginTop: 5
            }} onClick={() => {

              if (title !== "" && code !== "" && description !== "" && credit !== "" && department !== null && course_type !== null && semesterCourse !== null) {
                CreateCourseRequest(title, code, description, credit, department, course_type, semesterCourse);
              } else {
                alert("Make sure all fields are filup");
              }

            }}>Course Create</Button>

          </Card>
        </>}
        onOk={() => {
          setPopup(false);
        }}
        onCancel={() => {
          setPopup(false);
        }}>

      </Modal>


      <Card title={<div className='flex jy_sb'>
        <span>Course List</span>
        <div className='flex'>
          <Select
            style={{
              width: 200,
            }}
            value={course_department}
            options={departmentx}
            placeholder="Course by Department"
            onChange={(value) => {
              dispatch(courseDepartmentAction(value));
              FetchInfo({ semester: course_semester, department: value });
            }}
          />

          <Select
            style={{
              width: 200,
              marginLeft:5
            }}
            value={course_semester}
            options={semesterx}
            placeholder="Course by Semester"
            onChange={(value) => {
              dispatch(courseSemesterAction(value));
              FetchInfo({ semester: value, department: course_department });
            }}

          />
          <Button className='mar_l5' onClick={() => {
            FetchSemesterInfo({ dispatch: dispatch });
            setPopup(true);
          }}>Add + </Button>
        </div>
      </div>}>

        <List dataSource={course_list} renderItem={(item) => {
          return <List.Item onClick={() => {
          }}>{item.title} {item.name} - {item.code} - {item.credit}(Cr.) ({item.department})</List.Item>
        }}>
        </List>

        {/* <table className='table'>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Course Teacher & Section</th>
          </tr>

          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((e) => {
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

        </table>  */}


      </Card>
    </div>
  )
}

export default Course