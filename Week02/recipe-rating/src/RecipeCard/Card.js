import React from 'react'
import './styles.css' // import regular stylesheet - scope them by folder - later we'll convert to css module
// Hmmm. This looks like a reusable UI component...
// Lets discuss next class

// anything inside opening and closing tag -> CHILDREN - get this prop for free - no need to do children=...
export default function Card(props) {
  // our props are what they're called, so must be the same name as the prop attribute when destructuring
  // keep the name the same the whole way thru
  // component library - next week - React router - reusable components for project - like a mini style guide/Bootstrap
  // recreate exact same style guide - then feel like Bootstrap but it's React
  // const {children} = props

  // // word destructuring with array using useState React
  // const otherChildren = props.children // this is if u want to rename a prop that came in but DON'T DO THIS - will confuse urself!!
  
  // return <div className="card">{children}</div>
  return <div className="card">{props.children}</div>
}
