import React from 'react'
import './styles.css'

export default function RecipeInfo(props) {
  const {title, description} = props
  return (
    // make sure only 1 H1 on a page -> usually asked in CS test
    // to-do list - create, react, edit
    <div className="recipe_info">
      <h2 className='recipe_title'>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
