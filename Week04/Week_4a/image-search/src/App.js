import { useState } from 'react'
import SearchBar from './components/SearchBar'
import searchImages from './api'
import ImageList from './components/ImageList'

// use const instead of export default function
// if use const, cannot put export default with it, must do it at the bottom
const App = () => {
  // the reason we want our images here and not in searchbar or another child component, this is where we want to trigger a rerender - everytime the state changes - entire App will re-render
  const [ images, setImages ] = useState([])

  // gets term from child SearchBar
  // flag as async because searchImages in api.js is an async function
  const handleSubmit = async (term) => {
    console.log('do a search with: ', term)
    // this is where the search with axios will happen
    const result = await searchImages(term) // result is an array of 10 images related to the term
    console.log(result)
    setImages(result)
  }

  return (
    // the parent aka App will get whatever was submitted - so onSubmit here instead of in SearchBar component file
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      {/* images is the whole array */}
      <ImageList images={images} />
    </div>
  )
}

export default App