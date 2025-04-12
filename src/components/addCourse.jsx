import { useState } from 'react'
import '../styles/course.css'

const AddCourse=()=>{

    const[course,setCourse]=useState('')
    const[duration,setDuration]=useState('')
    const[img,setImg]=useState('')
    const[desc,setDesc]=useState('')

    function handleCourse(e){
        setCourse(e.target.value)
    }
    function handleDesc(e){
        setDesc(e.target.value)
    }
    function handleDuration(e){
        setDuration(e.target.value)
    }
    function handleImg(e){
        setImg(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
        if(course && duration && img && desc){
            console.log(course,duration,img,desc)
        }else{
            alert('required field is empty')
        }
        setCourse('')
        setDesc('')
        setDuration('')
        setImg('')
    }
    return(
        <>
            <div className='form'>
                <form typeof="submit" className="course">
                    <h3>Add new Course</h3>
                    <label htmlFor="">Course</label>
                    <input type="text" placeholder="enter course name" value={course} onChange={handleCourse}/>
                    <label htmlFor="">Duration</label>
                    <input type="text" placeholder="enter course duration" value={duration} onChange={handleDuration}/>
                    <label htmlFor="">ImageURL</label>
                    <input type="text" placeholder="give course image" value={img} onChange={handleImg}/>
                    <label htmlFor="">Description</label>
                    <input type="text" placeholder="enter course description" value={desc} onChange={handleDesc}/>
                    <button type='submit' onClick={handleSubmit}>Create Course</button>
                </form>
            </div>
        </>
    )
}

export default AddCourse