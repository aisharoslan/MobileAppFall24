import React from 'react'
// usually don't need to import styles cause alrdy in index.js but we need it for css modules
import './styles.css'
export default function InstructionsList(props) {
  const {instructions} = props
  return (
    <div className="instructions_list">
      <h3 className="list_title">Instructions</h3>
      <ol>
        {instructions.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ol>
    </div>
  )
}
