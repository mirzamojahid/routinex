import React, { useEffect, useRef, useState } from 'react'
import { Button, Input, Space, Table } from 'antd';
import fahad from '../images/fahadsir.jpeg'
import { base_endpoint, headerx } from '../utils/constants';
import { CheckToken, clearToken } from '../utils/auth';
import { useDispatch, useSelector } from 'react-redux';
import { teacherlistAction } from '../appstate/actions/teacherAction';

const { Column, ColumnGroup } = Table;


function Tablex() {


  const dispatch = useDispatch()
  const { teacher_list, teacher_selected, teacher_department } = useSelector((state) => state.teacher);


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


  useEffect(() => {

    if (teacher_list !== null && teacher_list.length === 0) {
      FetchInfo();
    }
  }, []);



  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',

    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Designation',
      dataIndex: 'designation',
    },
    {
      title: 'Action',
      dataIndex: 'action'
    },
  ];



  return (
    <div>
      <Table dataSource={teacher_list}>
        <Column title="Full Name" dataIndex="name" key="name" />
        <Column title="Email" dataIndex="email" key="email" />

        <Column title="Designation" dataIndex="designation" key="designation" />

        <Column
          title="Action"
          key="action"
          render={(_, record) => (
            <Button>View</Button>
          )}
        />
      </Table>
    </div>
  )
}

export default Tablex