import React from 'react'
import RecipeCard from './RecipeCard' // ez bc just use index.js in RecipeCard - so keep that naming
import './global.css'
function App() {
  return (
  <>
    <header className="recipe-header">
      <h2>Recipe Website Header</h2>
    </header>
    <RecipeCard />
    <footer className="recipe-footer">
      <h2>Recipe Website Footer</h2>
    </footer>
  </>
  )
}

export default App
