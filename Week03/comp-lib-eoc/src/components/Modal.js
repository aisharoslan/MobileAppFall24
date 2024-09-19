import ReactDOM from 'react-dom'
import { useEffect } from 'react' // a hook like useState - fires when component is mounted/created - x exist in html anymore - can fire only once

export default function Modal(props) {
  // to handle events, can use the props
  const { onClose, children, actionBar } = props

  // Format: useEffect(() => {}, [])
  // useEffect takes 2 params: arrow function and an empty array (condition - when something fires/creates/props change - like a watcher to check, then fire the first param (function)) - react creates and destroys things without page reloading - dynamic DOM - it doesn't hide and show
  /*
  This is the useEffect hook from React 
  useEffect fires every time the component is mounted (aka created) in the DOM
  it's not hiding portal - just destroying the entire element
  */
  // great as a timer or smth
  // 1st argument is an arrow function we want to fire 
  // 2nd argument is an array of pieces of state we want to watch for a change. When they change, useEffect's arrow function fires
  // if only want it to fire when it's created, the second argument is an empty array []
  useEffect(() => {
    // disable scrolling when the modal is open
    // grab body tag, get class list and add
    // this is APPLIED WHEN CREATED
    document.body.classList.add('overflow-hidden')

    /* useEffect can also take a callback function: 
    if u return a function here, it will fire when the component is destroyed (aka our close modal action)
    */
    //  THIS IS APPLIED WHEN DESTROYED OR UPDATED - everything refreshes when a state changes - anything relying on that will change/update - our ModalPage updates
    // if want a local thing, e.g. watching for a count - put in empty array!
    // used as a clean up function after we destroy smth
   return () => {
    document.body.classList.remove('overflow-hidden')
   }
  }, [])

  // we use createPortal - takes 2 params: jsx, plain js
  // want multiple portals to render to - so that it's separate from root - not influenced by that parent - creates it's own section - relative absolute fixed etc x effect in createPortal
  return ReactDOM.createPortal(
    <>
      {/* add an X at the top right, and arrange bottoms */}
      {/* everything by default is static, if fixed, absolute, sticky - it's relative to any parent element not positioned static */}
      {/* (Overlay) for the background */}
      {/* inset-0 covers whole background, top, bottom, right, left = 0 */}
      <div onClick={onClose} className='absolute inset-0 bg-gray-300 opacity-50'></div>

      {/* h-full - take up whole window */}
      {/* inset-40, top bot left right = 40% */}
      {/* Modal BG */}
      <div className="absolute inset-40 p-10 bg-white">
        {/* Modal Content */}
        <div className="flex flex-col justify-between h-full">
          {/* Children Text */}
          <div>{children}</div>
          {/* Action Bar */}
          {/* making a new prop! */}
          {/* justify-end - all the way to right */}
          <div className="flex flex-row justify-end">
            {actionBar}
          </div>
        </div>
      </div>
    </>, document.getElementById('portal')
  )
}

// several modals - same or diff page?
// internal external tailwind css bootstrap multiple libraries - how is it prioritized - whatever's last, usually do AFTER tailwind bc it rebases styles
// () return for multiple lines - need it but sometimes x required
// portal - need portal so that components live outside a relative parent and is it's own thing