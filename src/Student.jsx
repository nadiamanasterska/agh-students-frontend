const Student = ({name, surname, age, email}) => {
  return (
    <div className="student-container">
    <h3>{name} {surname}</h3>
      <p>age: {age}</p>
      <p>email: {email}</p> 
    </div>
  );
}
 
export default Student;