import React from 'react'
import '../../styles/generate.css'
import FacultyListSearch from '../../components/FacultyListSearch';
import OfferedCourse from '../../components/Generate/OfferedCourse';


function Genrate() {



    return (<div className='flex'>
        <FacultyListSearch></FacultyListSearch>
        <div className='mar_l5 mar_r5'></div>
        <OfferedCourse></OfferedCourse>
    </div>
    )
}

export default Genrate