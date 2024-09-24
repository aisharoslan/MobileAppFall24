import { useState } from 'react'

// binding form element
const SearchBar = (props) => {
  const { onSubmit } = props
  const [ term, setTerm ] = useState('')
  
  const handleChange = (event) => {
    // it'll be fired for every letter (a change)
    setTerm(event.target.value)
    // now term = 'd' - then we see it bc we use it as our value in input
  }

  const handleFormSubmit = (event) => {
    // disable the form input collection (built in to html) - prevent page from refreshing when we submit
    event.preventDefault()
    // pass term to parent App
    onSubmit(term)
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {/* plain old html - with input, it'll be auto submitted when hit enter */}
        {/* binding our term and setTerm to this input */}
        <input type="text" onChange={handleChange} value={term}/> 
      </form>
    </div>
  )
}

export default SearchBar