import createDataContext from "./createDataContext"

const postReducer = (state, action) => {
  switch (action.type) {
    case 'add_post':
      // copy our existing state array, and then append a new one at the end
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 10000),
          title: action.payload.title,
          content: action.payload.content,
        },
      ]
    case 'delete_post':
      return state.filter((post) => post.id !== action.payload)
    case 'edit_post':
      return state.map((post) => {
        // if the id matches the one we want to edit
        // return the new payload instead of the old post
        // if (post.id === action.payload.id) {
        //   return action.payload
        // } else {
        //   // otherwise, return the existing post untouched
        //   return post
        // }

        // ternary version
        return post.id === action.payload.id ? action.payload : post
      })
    default:
      return state
  }
}

// action helpers, now bound with dispatch
const addDiaryPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({type: 'add_post', payload: {title, content}})
    if (callback) {
      callback()
    }
  }
}

const deleteDiaryPost = (dispatch) => {
  return (id) => {
    dispatch({type: 'delete_post', payload: id})
  }
}

const editDiaryPost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({type: 'edit_post', payload: {id, title, content}})
    if (callback) {
      callback()
    }
  }
}

export const { Context, Provider } = createDataContext(
  postReducer, {
    addDiaryPost,
    deleteDiaryPost,
    editDiaryPost
  }, [
    { 
      id: 123,
      title: "Test Post 1", 
      content: "Test Content so we don't have to create a new post every time we reload!"
    }
  ]
)
