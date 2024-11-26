// plain function
import React, {useReducer} from 'react'

export default (reducer, actions, initialState) => {
    const Context = React.createContext() // could just import createContent too

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, initialState)
        
        // actions = {addDiaryPost: (dispatch) => {return () => {...}}}
        const boundActions = {}
        
        for (let key in actions) {
            boundActions[key] = actions[key](dispatch)
            // e.g. boundActions[addDiaryPost] = actions[addDiaryPost](dispatch)
            // call it with dispatch, bind it to dispatch
            // both need to know about dispatch
        }

        return (
            // unpack so that we get the actual object, not an array
            <Context.Provider value={{state, ...boundActions}}>
                {children}
            </Context.Provider>
        )
    }

    return { Context, Provider }
}
