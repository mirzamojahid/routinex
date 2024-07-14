import React, { useEffect, useState } from 'react'
import { Card, List } from 'antd'
import { base_endpoint, headerx } from '../../utils/constants';
import { CheckToken, clearToken } from '../../utils/auth';

function Home() {


  const [routineList,setRoutineList]=useState([])

  const FetchInfo = async () => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      const res = await fetch(base_endpoint + "/api/diu/api/routine/file/", {
        method: "GET",
        headers: headerx
      })
      const datax = await res.json();
      if (res.status === 200) {
       setRoutineList(datax['data']);
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }

  }


  const downloadRoutineFile = async (file_name,file_link) => {
    try {
        const response = await fetch(file_link);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', ""+file_name+'routine.xlsx');
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link);
    } catch (error) {
        console.error('Error downloading file:', error);
        // Handle error as needed
    }


}

  useEffect(() => {
    if (routineList !== null && routineList.length === 0) {
      FetchInfo();
    }
  }, [])

  return (
    <div>
      <Card title='Routine List'>
        <List dataSource={routineList} renderItem={(e) => {
          return <List.Item onClick={()=>{

            downloadRoutineFile(`v_${e.version}_${e.semester}`,e.file);
          }}>V{e.version}. {e.semester}</List.Item>
        }}></List>
      </Card>
    </div>
  )
}

export default Home