// import React, { useEffect, useState } from 'react'
// const App = () => {
//   const [state, setState] = useState(0)

//   useEffect(() => {
//     console.log("O'zgardi")
//   })

//   return (
//     <div>
//       <h1>Hello World</h1>
//       <input type="text" />
//       <button onClick={() => setState(n => n + 1)}>Increment</button>
//     </div>
//   )
// }
// export default App

// ========================================

import React, { useReducer, useState } from 'react'

function reducer (state, action) {
  if (action === 'increment') {
    return { count: state.count + 1 }
  } else if (action === 'decrement') {
    return { count: state.count - 1 }
  } else if (action === 'multiply') {
    return { count: state.count * 2 }
  } else if (action === 'divide') {
    return { count: state.count / 2 }
  } else if (action === 'reset') {
  } else {
    return state
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })

  console.log(state)

  return (
    <>
      <h1>App Component: {state.count}</h1>
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
      <button onClick={() => dispatch('multiply')}>*</button>
      <button onClick={() => dispatch('divide')}>/</button>
    </>
  )
}
export default App
