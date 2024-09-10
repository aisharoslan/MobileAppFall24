import React from 'react'
import './styles.css'

// we want to work with atoms - use these components
export default function RecipeImg(props) {
  return <img src={props.imgSrc} alt="buttermilk pancakes" className="img" />
}
