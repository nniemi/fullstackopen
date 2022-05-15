const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part1 = {parts.at(0).name} exercises1={parts.at(0).exercises} part2 = {parts.at(1).name} exercises2={parts.at(1).exercises} part3 = {parts.at(2).name} exercises3={parts.at(2).exercises}/>
      <Total exercises1 = {parts.at(0).exercises} exercises2 = {parts.at(1).exercises} exercises3 = {parts.at(2).exercises}/>
    </div>
  )
}

const Header = (props) => {
  return(
  <div>
      <h1>{props.course}</h1>
  </div>
  )
}

const Content = (props) => {

  return(
    
    <div>
      <Part part1 = {props.part1} exercises1 = {props.exercises1}/>
      <Part part2 = {props.part2} exercises2={props.exercises2}/>
      <Part part3 = {props.part3} exercises3={props.exercises3}/>    
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}

const Total = (props) => {
  return(
  <div>
    <p>
      Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}
    </p>
  </div>
  )
}


export default App