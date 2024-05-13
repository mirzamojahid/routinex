import React from 'react'
import '../../styles/generate.css'
import FacultyListSearch from '../../components/FacultyListSearch';
import OfferedCourse from '../../components/Generate/OfferedCourse';
import { FloatButton } from "antd";

function Genrate() {



    return (<div className='flex'>
        <FacultyListSearch></FacultyListSearch>
        <div className='mar_l5 mar_r5'></div>
        <OfferedCourse></OfferedCourse>
        <FloatButton  className='next_float' icon={<span>Next</span>}></FloatButton>
    </div>
    )
}

export default Genrate