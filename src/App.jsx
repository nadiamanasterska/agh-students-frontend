import { useEffect, useState } from 'react'
import './App.css'
import Student from './Student'

const API_URL = 'http://127.0.0.1:8000';
const API_STUDENTS = API_URL + "/students";


function App() {

  const [students, setStudents] = useState([])

  useEffect(() => {
    fetch(API_STUDENTS).then((response) => console.log(response.json().then((data) => setStudents(data.students))))
  }, [])


  return (
    <div className='app-container'>
      {students.map((student, index) => (
        <Student
          key={index}
          name={student.name}
          surname={student.surname}
          age={student.age}
          email={student.email}
      />
      ))}
    </div> 
  )
}

export default App
