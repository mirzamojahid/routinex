import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Admin() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/admin/routine')
    }, [navigate])

}

export default Admin