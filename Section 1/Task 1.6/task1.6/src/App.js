import { useState } from 'react'

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
      <div>
        <p>
          good {good}
        </p>
      </div>
      <div>
        <p>
        neutral {neutral}
        </p>
      </div>
      <div>   
        bad {bad}
      </div>

    </div>
  )
}

export default App