import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const sumInitialState = {
  number: 0,
}

export const reducer = (state = {}, action) => {
  const newState = {
    ...state,
  }
  console.log(action)
  switch (action.type) {
    case 'ADD':
      newState.number += action.payload
      // state += action.payload
      break
    case 'SUBTRACT':
      // state -= action.payload
      break
    case 'ADDSUM':
      newState.number = action.payload
      break

    default:
  }
  console.log(newState)
  return newState;
}
export const summaryAction = totalPrice => ({
  type: 'ADDSUM',
  payload: totalPrice,
})
export const addAction = () => ({
  type: 'ADD',
  payload: 500,
})

export const subAction = () => ({
  type: 'SUBTRACT',
  payload: 10000,
})
export const initializeStore = (initialState = sumInitialState) => createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware()),
)
