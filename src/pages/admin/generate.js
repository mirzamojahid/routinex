import React from 'react'
import '../../styles/generate.css'
import FacultyListSearch from '../../components/FacultyListSearch';
import OfferedCourse from '../../components/Generate/OfferedCourse';

import { useDispatch, useSelector } from 'react-redux';
import { generateNextDisableAction, generateNextEnableAction } from '../../appstate/actions/generateAction';

import { Modal, FloatButton } from 'antd';


function Genrate() {
    const dispatch = useDispatch()
    const { activeTeacher, next } = useSelector((state) => state.generate);


    
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
