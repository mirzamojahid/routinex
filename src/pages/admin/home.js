import React, { useEffect } from 'react'
import { Card, List } from 'antd'
import { useDispatch, useSelector } from 'react-redux';
import { base_endpoint, headerx } from '../../utils/constants';
import { CheckToken, clearToken } from '../../utils/auth';
import { routinelistAction } from '../../appstate/actions/routineAction';

function Home() {


  const dispatch = useDispatch();
  const { rouitne_department, rouitne_list } = useSelector((state) => state.routine);

  const FetchInfo = async () => {
    try {
      headerx['Authorization'] = `Bearer ${CheckToken()}`;
      const res = await fetch(base_endpoint + "/api/diu/rouines/", {
        method: "GET",
        headers: headerx
      })
      const datax = await res.json();
      if (res.status === 200) {
        dispatch(routinelistAction(datax));
      } else if (res.status === 401) {
        clearToken();
        window.location.href = "/login";
      }
    } catch (err) {
      console.log(err);
    }

  }



  useEffect(() => {
    if (rouitne_list !== null && rouitne_list.length === 0) {
      FetchInfo();
    }
  }, [])

  return (
    <div>
      <Card title='Routine List'>
        <List></List>
      </Card>
    </div>
  )
}

export default Home