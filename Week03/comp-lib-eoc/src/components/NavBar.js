// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'

// a href x work in react
// gatsby/next.js - use own link component

// To-do list (for coding test) - then mobile - who is ur user? not just a plain to do list - what wld extra feature be - e.g. inventory, healthcare, workout maker or smth - come up with a use case - user story - so that u need to add a user feature - a little more UX - think abt it - for MIDTERM - just gonna style what we do in class - To-Do list will be unstyled in class - then we style it in mobile - SPECIFIC USE CASE - js or jsx - jsx for components - best practice - but x make a diff - tsx for typescript

// homework - create a new component - can refer to bootstrap - as long as it takes props and/or func - maybe a list - that's styled - and list item - make component and component page - and add the route to the nav as a 4th item

// IMPORTANT: Links to prop needs the '/path'
// we get an active class for free by NavLink
const NavBar = () => {
    // we get isActive for free by NavLink - it matches based on the path in the to prop and the route we're on
    let isActive // needs to be a let bc it's empty
    // put conditional classes in {}, everything before is default for all
    const classes = cx('text-blue-500', {'font-bold decoration-solid': isActive})
    return (
        // sticky left side bar
        <nav className="sticky top-0 overflow-y-scroll flex flex-col item-start">
            {/* Link takes a to prop storing the route, to replaces href basically */}
            <NavLink to="/" className={classes}>
                {/* anchor text */}
                Buttons
            </NavLink>

            {/* here we need slash, but in App.js when we define Route, we don't need slash */}
            <NavLink to="/accordion" className={classes}>
                Accordion
            </NavLink>

            <NavLink to="/modal" className={classes}>
                Modal
            </NavLink>
        </nav>
    )
}

// react snippets
// rafc - react arrow function
// rafce - react export default function
// u can't export default a const - bc there's a function on the other side



// WITHOUT ACTIVE CLASS
// const NavBar = () => {
//     return (
//         // sticky left side bar
//         <nav className="sticky top-0 overflow-y-scroll flex flex-col item-start">
//             {/* Link takes a to prop storing the route, to replaces href basically */}
//             <Link to="/" className="text-blue-500">
//                 {/* anchor text */}
//                 Buttons
//             </Link>

//             {/* here we need slash, but in App.js when we define Route, we don't need slash */}
//             <Link to="/accordion" className="text-blue-500">
//                 Accordion
//             </Link>
//             <Link to="/modal" className="text-blue-500">
//                 Modal
//             </Link>
//         </nav>
//     )
// }

export default NavBar