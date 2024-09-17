// writing in React - can change to jsx to indicate it's a component
// props and state - all it did was apply style in the past
// content as data coming in as a prop
// need a click action
// where does data live and where does state live?

import {useState} from 'react'
import {GoChevronDown, GoChevronRight} from 'react-icons/go'

export default function Accordion(props) {
    // keep track of expandedIndex in state (values that can change over time) - this component is gonna re-render based on user interaction
    // const [name, function_to_update/set_state] 
    // set default to 0 - this is the starting state
    const [expandedIndex, setExpandedIndex] = useState(-1) // all will start as closed because -1 not in any of the indices

    // content isn't part of the Accordion bc we want it to be reusable for different info
    const {items} = props

    const renderedItems = items.map((item, index) => { 
        const isExpanded = index === expandedIndex
        const icon = <span className="text-2xl">
            {/* our first ternary! 1 - condition that we are checking to be true, 2 -  what to return if condition 1 is true, 3 - what to render else, aka if condition 1 is false */}
            { isExpanded ? <GoChevronDown /> : <GoChevronRight /> }
        </span>
        const handleClick = (nextIndex) => {
            // expandedIndex = index // NEVER DO THIS!! must use setter bcs things re-render - we use a setter because it still references the same one - e.g. expandedIndex = 1, comparing to setExpandedIndex(1) - so nothing changed - react x re-render - so must keep single source of truth - SETEXPANDEDINDEX!! it shouldn't compare itself to itself, else never changes/re-renders
            // console.log(index)
            // setExpandedIndex(index)
            // whatever is the previous = currentExpandedIndex
            // we get current and next for free
            // setExpandedIndex(nextIndex) // can't close it if u click on itself again
            setExpandedIndex((currentExpandedIndex) => {
                // if the item is already open, close it
                // else open it
                if (currentExpandedIndex === nextIndex) {
                    return -1 // sets expandedIndex to be -1
                } else {
                    return nextIndex
                }
            })
        }
        return (
            <div key={item.id}>
                {/* using tailwind css */}
                {/* add an onClick to label since that's where we want to click on to open accordion */}
                {/* setExpandedIndex(index) - REFERENCE TO A FUNCTION - NOT CALLING THE FUNCTION - parantheses only to pass parameter, so () => setExpandedIndex(index) would work instead of handleClick, but we use handleClick so that it's cleaner */}
                <div onClick={() => handleClick(index)} className="flex justify-between p-3 bg-gray-100 border-b items-center cursor-pointer">{item.label} {icon}</div>

                {/* only show content one at a time - if 1 opens, another closes - set which one to be expanded index */}
                {/* so we keep track of state HERE in Accordion.js */}
                {/* If the content index matches the expandedIndex in state, render it. Otherwise, render nothing. */}
                {/* look at CONDITIONAL RENDERING on notes */}
                {/* returns the LAST truthy (existing) value - what's rendered is the LAST truthy value, if isExpanded true, then the latter renders */}
                {/* if isExpanded false, then nothing renders */}
                { isExpanded && <div className="border-b p-5">{item.content}</div> }
            </div>
        )
    })

    return <div>{renderedItems}</div>
}