import { NavLink } from "react-router-dom"
import '../styles/nav.css'

const Navbar=()=>{

    return(
        <>
            <div className="nav">
                <div className="logo">
                <img src="https://tse1.mm.bing.net/th?id=OIP.L0SwpaenZLjw0jAYxetTRgHaEK&pid=Api&P=0&h=220" alt="" />
                <p>Skill Bridge</p>
                </div>
                <div className="navlink">
                    <NavLink className='pages' to="/" >Home</NavLink>
                    <NavLink className='pages' to="/courses" >Courses</NavLink>
                    <NavLink className='pages' to="/mentors" >Mentors</NavLink>
                    <NavLink className='pages' to="/dashboard">Dashboard</NavLink>
                    <NavLink className='pages' to="/upload" >Upload Work</NavLink>
                    <NavLink className='pages' to="/forum">Forum</NavLink>
                    <NavLink className='pages' to="/login">Login</NavLink>
                </div>    
            </div>    
        </>
    )
}

export default Navbar