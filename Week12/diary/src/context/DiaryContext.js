import React, { createContext, useReducer } from  'react'

// in production - we use useReducer / Redux to avoid our context from bloating

// create the context for data sharing
const DiaryContext = createContext() // to share context with individual components

// in charge of all updates and state management of posts
const postReducer = (state, action) => {
    // Coming Soon
    switch (action.type) {
        case 'add_post':
            // copy our existing state array, and then append a new one at the end
            // need id for deletion later on
            return [
                ...state, 
                {
                    id: Math.floor(Math.random() * 10000), 
                    title: `Diary Post #${state.length + 1}`
                }]
        case 'delete_post':
            // if return false, ditch it
            return state.filter((post) => post.id !== action.payload)
        default:
            return state
    }
}

// create a Provider component which can wrap our App as children
// Provider is to wrap component
export const DiaryProvider = ({ children }) => {
    // const diaryPosts = [
    //     { title: 'Diary Post #1' },
    //     { title: 'Diary Post #2' },
    //     { title: 'Diary Post #3' },
    //     { title: 'Diary Post #4' }
    // ]

    // const [diaryPosts, setDiaryPosts] = useState([])

    // state is a giant object
    // first arg is reducer to send to, second arg is initial state
    // always destructure out state and dispatch
    // remember state is ALL the state in one object usually
    // today our starting state is an empty array
    // dispatch is a helper function we call to dispatch action objects
    // actions = { type: 'add_post', payload?: data we need to update the state}

    // useReducer takes 2 arguments, the first is the reducer function we want to pass our actions into
    // the second is our initial state
    const [ state, dispatch ] = useReducer(postReducer, [])

    const addDiaryPost = () => {
        // setDiaryPosts([
        //     ...diaryPosts, {title: `Diary Post #${diaryPosts.length + 1}`}
        // ])
        dispatch({type: 'add_post'})
    }

    const deleteDiaryPost = (id) => {
        dispatch({type: 'delete_post', payload: id})
    }

    return (
        <DiaryContext.Provider value={{data: state, addDiaryPost, deleteDiaryPost}}>
            {children}
        </DiaryContext.Provider>
    )
}

export default DiaryContext


