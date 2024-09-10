// sometimes need it for every single file - type checking with flow and typescript might need this to work
import React from 'react'

// not an export default, this is an export const - cld have an array of recipes, all sort of things, recipe1, recipe2 etc... - call it by exact name it's exported as and will show up here
// named exports need exact names and curly braces
import {RECIPE} from './recipe-data' 

// all component imports - these all have export default from their files
import RecipeInfo from './RecipeInfo'
import RecipeImg from './RecipeImg'
import IngredientsList from './IngredientsList'
import InstructionsList from './InstructionsList'
import Card from './Card'
import UserRating from './UserRating'
import './styles.css'

// HW: Apply CSS styling, dont forget to import the style sheet in the other component files!
// Figma designs here: https://www.figma.com/file/oPToKD0BEwCUQFt3OjCDw6/RecipeCardStarter?node-id=2%3A134&mode=dev
// Or if youre feeling fancy, design your own!
export default function RecipeCard() {
  return (
    // treat this as App.js
    // component that uses children
    <Card>
      {/* children as props */}
      <RecipeImg imgSrc={RECIPE.imgSrc} />
      <div className="card_text">
        <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
        <div className="card_lists">
          <IngredientsList ingredients={RECIPE.ingredients} />
          <InstructionsList instructions={RECIPE.instructions} />
        </div>
        <UserRating />
      </div>
      {/* User Rating Try Here */}
    </Card>
  )
}

// package.json
// left most is a breaking change - last one
    // 3rd - bug fixes
    // 2nd is addition of new feature
    // 1st num is a breaking change - using v1 to v2 - code might not work anymore - pin it to this exact version of react - pin a version if they update react