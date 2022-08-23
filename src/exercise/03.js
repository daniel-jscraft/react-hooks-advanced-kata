import * as React from 'react'
import {useState, useContext, createContext} from 'react'

const CountContext = createContext()

function useCount() {
  const countContext = useContext(CountContext)
  if (!countContext) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return countContext
}

function CountProvider(props) {
  const [x, setX] = useState(10)
  // use {...props} to render the children
  return <CountContext.Provider value={[x, setX]} {...props} />
}

function CountDisplay() {
  const [x] = useCount()
  return <div>{`The current count is ${x}`}</div>
}

function Counter() {
  const [ , setX] = useCount()
  const increment = () => setX(x => x + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App