const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <strong>
          <Total course={course} />
        </strong>
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map((part) => (<Part key={part.id} part={part} />))}
      </div>
    )
  }
  
  const Part = ({part}) => {
    return (
      <div>
        {part.name} {part.exercises}
      </div>    
    )
  }
  
  const Total = ({ course }) => {
    const amountOfExercises = 0;
    const total = course.parts.reduce((s, p) => s + p.exercises, amountOfExercises)
    return(
      <div>Total exercises {total}</div>
    ) 
  }

  export default Course