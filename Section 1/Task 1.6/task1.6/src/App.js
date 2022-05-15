import { useState } from 'react'





const Statistics = (props) => {
  
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return(
      <div>
      No feedback given!
    </div>
    )
  } else {
    return(
  
  

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
      <div>
        <button onClick={() => setGood(good + 1)}>
          good
        </button>

        <button onClick={() => setNeutral(neutral + 1)}>
          neutral
        </button>

        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>
      </div>
      <h1>
        Stats
      </h1>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    
      </div>
      
  )
}

export default App