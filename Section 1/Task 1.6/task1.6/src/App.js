import { useState } from 'react'



const Button = (props) => {

  return(
  <><button onClick={() => props.setGood(props.good + 1)}>
    good
  </button><button onClick={() => props.setNeutral(props.neutral + 1)}>
      neutral
    </button><button onClick={() => props.setBad(props.bad + 1)}>
      bad
    </button></>
  )
}

const StatisticsLine = (props) => {
 return(
   <tr>
     <td>
     {props.text} 
     </td>
     <td>
     {props.value} 
     </td>
   </tr>


 )  
      
}

const Statistics = (props) => {
  
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return(
      <div>
      No feedback given!
    </div>
    )
  } else {
    return(
      <table>
        <tbody>
        <><StatisticsLine text="good" value={props.good} />
        <StatisticsLine text="neutral" value={props.neutral} />
        <StatisticsLine text="bad" value={props.bad} />
        <StatisticsLine text="all" value={props.bad + props.neutral + props.bad} />
        <StatisticsLine text="average" value={(props.good * 1 + props.neutral * 0 + props.bad * (-1)) / (props.good + props.neutral + props.bad)} />
        <StatisticsLine text="positive" value= {`${props.good / (props.good + props.neutral + props.bad) * 100} %`} /></>
        </tbody>
      </table>

    )
  }
}
 
const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
  <div>
      <h1>
        Give feedback
      </h1>
        <Button good={good} setGood={setGood} neutral={neutral} setNeutral={setNeutral} bad={bad} setBad={setBad}/>
      <h1>
        Stats
      </h1>     
        <Statistics good={good} neutral={neutral} bad={bad}/>

      </div>
      
  )
}

export default App