import React from 'react'
import '../../styles/generate.css'
import FacultyListSearch from '../../components/FacultyListSearch';
import OfferedCourse from '../../components/Generate/OfferedCourse';

import { useDispatch, useSelector } from 'react-redux';
import { generateNextDisableAction, generateNextEnableAction } from '../../appstate/actions/generateAction';

import { Modal, FloatButton } from 'antd';
import { base_endpoint } from '../../utils/constants';


function Genrate() {
    const dispatch = useDispatch()
    const { activeTeacher, next } = useSelector((state) => state.generate);


    const generateRoutineFile = async () => {
        try {
            const response = await fetch(base_endpoint + '/api/diu/api/download-routine-excel/');
            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'routine.xlsx');
            document.body.appendChild(link);
            link.click();
            link.parentNode.removeChild(link);
        } catch (error) {
            console.error('Error downloading file:', error);
            // Handle error as needed
        }


    }


    return (<div className='flex'>
        <FacultyListSearch></FacultyListSearch>
        <div className='mar_l5 mar_r5'></div>
        {activeTeacher !== null && <>
            <OfferedCourse></OfferedCourse>
            <FloatButton className='next_float' onClick={() => {
                dispatch(generateNextEnableAction());
            }} icon={<span>Next</span>}></FloatButton>

            <Modal
                width={340}
                title="Do you want to Routine Generate"
                open={next}
                centered
                closable={false}
                children={<>Routine Builder can help you easy way to generate routine</>}
                onOk={() => {
                    generateRoutineFile();
                    dispatch(generateNextDisableAction());
                }}
                onCancel={() => {
                    dispatch(generateNextDisableAction());
                }}
            >
            </Modal>
        </>
        }
    </div>
    )
}

export default Genrate
