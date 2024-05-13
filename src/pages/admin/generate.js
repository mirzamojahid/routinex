import React from 'react'
import '../../styles/generate.css'
import { options } from '../../utils/constants'
import { Select } from 'antd'; 
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

// function Genrate() {
//     return(
//         <div style={{background: 'white', height:'82vh', paddingTop: 10}}>
//             <div 
//                 style={{
//                     display:'flex', 
//                     justifyContent: 'space-around',
//                     height: 60,
//                     alignItems: 'center',
//                     border: '1px solid rgba(7, 7, 7, 0.2)',
//                     margin: "0px 15px"
//                 }}
//             >
//             Faculty:
//             <Select
//                 showSearch
//                 style={{
//                 width: 250,
//                 }}
//                 placeholder="Select Faculty"
//                 optionFilterProp="children"
//                 filterOption={(input, option) => (option?.label ?? '').includes(input)}
//                 filterSort={(optionA, optionB) =>
//                 (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
//                 }
//                 options = {options}
//             />
//             Course:
//             <Select
//                 showSearch
//                 style={{
//                 width: 250,
//                 }}
//                 placeholder="Select Course"
//                 optionFilterProp="children"
//                 filterOption={(input, option) => (option?.label ?? '').includes(input)}
//                 filterSort={(optionA, optionB) =>
//                 (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
//                 }
//                 options = {options}
//             />
//             Section:
//             <Select
//                 showSearch
//                 style={{
//                 width: 250,
//                 }}
//                 placeholder="Select Section"
//                 optionFilterProp="children"
//                 filterOption={(input, option) => (option?.label ?? '').includes(input)}
//                 filterSort={(optionA, optionB) =>
//                 (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
//                 }
//                 options = {options}
//             />
//             </div>
//             <div
//                 style={{
//                     display:'flex',
//                     height: '87%',
//                 }}
//             >
//                 <div
//                     style={{
//                         width:"60%",
//                         border: '1px solid rgba(7, 7, 7, 0.2)',
//                         margin: "10px 15px",
//                         padding: 10,
//                     }}
//                 >
//                 </div>
//                 <div
//                     style={{
//                         width:'35%',
//                         border: '1px solid rgba(7, 7, 7, 0.2)',
//                         margin: "10px 15px",
//                         padding: 10,
//                     }}
//                 >
//                     <h3 
//                         style={{
//                             textAlign: 'center', 
//                             borderBottom: '1px solid rgba(7, 7, 7, 0.2)',
//                             paddingBottom:15
//                         }}
//                     >Offered Course List:</h3>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Genrate