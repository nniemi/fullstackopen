import { useState } from 'react'


const Statistics = (props) => {
  
  
  return(
  <div>
  <h1>
    Give feedback
  </h1>
  <div>
    <button onClick={() => props.setGood(props.good + 1, props.allClicks + 1)}>
      good
    </button>
    
    <button onClick={() => props.setNeutral(props.neutral + 1, props.allClicks + 1)}>
      neutral
    </button>

    <button onClick={() => props.setBad(props.bad + 1, props.allClicks + 1)}>
      bad
    </button>
  </div>
  <h1>
    Stats
  </h1>
  
  
    <><div> 
          good {props.good}
        </div><div>
            neutral {props.neutral}
          </div><div>
            bad {props.bad}
          </div><div>
            all {props.good + props.neutral + props.bad}
          </div><div>
            average {(props.good * 1 + props.neutral * 0 + props.bad * (-1)) / (props.good + props.neutral + props.bad)}
          </div><div>
            positive {props.good / (props.good + props.neutral + props.bad)}%
          </div></>
  
  </div>
  
  )


  
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let allClicks = 0;

  return (
      <Statistics good = {good} setGood ={setGood} neutral = {neutral} setNeutral = {setNeutral} bad = {bad} setBad = {setBad} allClicks = {allClicks}>

      </Statistics>
  )
}

export default App