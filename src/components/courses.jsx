import { Navigate, NavLink } from 'react-router-dom'
import '../styles/course.css'

const BrowseCourses=()=>{

    return(
        <>
            <NavLink to='/addCourse'>
                <button className='addBtn'>Create Course</button>
            </NavLink>
        </>
        
    )
}

export default BrowseCourses