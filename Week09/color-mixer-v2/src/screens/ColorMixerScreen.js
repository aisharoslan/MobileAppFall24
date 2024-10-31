import React, {useReducer} from 'react'
import {View, StyleSheet} from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 10

// action types as constants to avoid typos and allow validation
// can have typo in a variable name, not in a string
const CHANGE_RED = 'change_red'
const CHANGE_GREEN = 'change_green'
const CHANGE_BLUE = 'change_blue'

const reducer = (state, action) => {
  // state = {red: number, green: number, blue: number}
  // action = howToChangeStateObject {colorToChange: 'red' | 'green' | 'blue'}, amount: COLOR_INCREMENT || -1 * COLOR_INCREMENT}
  // action type gets passed into
  // switch(action.colorToChange) {
  switch(action.type) {
    case CHANGE_RED:
      // payload could be an entire object
      // x return null bc it'll wipe out our state - just return the state as is
      return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload}
      // if we dont want to change anything we have to return the current state
      // create copy of state, overwrite the property we wanna change
    case CHANGE_GREEN:
      return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload}
    case CHANGE_BLUE:
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload}
    default:
      return state // must return curr state to avoid wiping out sttae
  }
}

const ColorMixerScreen = () => {
  // an object of all states
  // access to state as a whole - starting state passed in
  // dispatch - dispatch an action to reducer - this is how u call ur reducer, pass in action object - comes into reducer as second argument action, but state is always there
  const [ state, dispatch ] = useReducer(reducer, {red: 0, green: 0, blue: 0})
  const { red, green, blue } = state
  console.log(red, green, blue)
  return (
    <View>
      <ColorCounter
        onIncrease={() => 
          dispatch({type: CHANGE_RED, payload: COLOR_INCREMENT})
        }
        onDecrease={() => 
          dispatch({type: CHANGE_RED, payload: -1 * COLOR_INCREMENT})
        }
        color="Red"
      />

      <ColorCounter
        onIncrease={() => 
          dispatch({type: CHANGE_GREEN, payload: COLOR_INCREMENT})
        }
        onDecrease={() => 
          dispatch({type: CHANGE_GREEN, payload: -1 * COLOR_INCREMENT})
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() => 
          dispatch({type: CHANGE_BLUE, payload: COLOR_INCREMENT})
        }
        onDecrease={() => 
          dispatch({type: CHANGE_BLUE, payload: -1 * COLOR_INCREMENT})
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: '100%',
          backgroundColor: `rgb(${red},${green},${blue})`,
          // basically state.red, state.green etc 
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: '#006FFF',
    textAlign: 'center',
  },
})

export default ColorMixerScreen
