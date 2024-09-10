// useState is a hook - useEffect, useReducer etc - hooks built into React - must import explicitly
// might come across the use of useState() like this in the wild
// it's like React.useState() if you imported entire library like 
// import React from 'react'
import {useState} from 'react'

// Heart is the name we give, then import the actual name of the svg - exported as React component - and we rename to Heart
// this is the library we installed, we are importing the favorite.svg as a React component renamed to Heart
import {ReactComponent as Heart} from '@material-design-icons/svg/filled/favorite.svg'

export default function UserRating() {
    // React.useState() returns 2 functions, 1st is what we want to call our piece of state, 2nd is a function to update that state (aka setter) - always in same order - pass in the initial value into useState (e.g. name could start with 'aisha' or null as default value)
    const [count, setCount] = useState(0)

    // can also define react components like this
    // this is a function and an arrow function
    const handlePlusClick = () => {
        if (count < 5) {
            setCount(count + 1)
        }
        return 
    }

    // count = count + 1 - ILLEGAL - don't mutate state!! look into this!!
    const handleMinusClick = () => {
        if (count > 0) {
            // the only way to update state
            setCount(count - 1)
        }
        return 
    }
    return  (
        <div>
            {/* regular button - lowercase b - next class - our own Button component - make it a React component - can style it */}
            {/* onClick is a built-in handler */}
            {/* naming convention to handle...Click */}
            <button onClick={handleMinusClick}>[-]</button>
            <span>
                {/* {count} */}
                {/* can write conditional logic js here */}
                {/* unpack the count array, 0,1,2,3,4 - wtvr number count is */}
                {/* heart is each item in the array */}
                {/* 1st is what we name it, 2nd is index */}
                {[...Array(count)].map((heart, i) => {
                    return (
                        <span key="i">
                            <Heart />
                        </span>
                    )
                })

                }
            </span>
            <button onClick={handlePlusClick}>[+]</button>
        </div>
    )
}


