// group small components tgt in a bigger component in its own folder (RecipeCard)

// import RECIPE_IMG from '../../assets/pancake.png'; // use all caps when importing data, RECIPE_IMG is naming it immediately
import {RECIPE} from './recipe-data'; // export const, not export default
// multiple imports from the same file, e.g. import {RECIPE1, RECIPE2,.. } from the same file, sometimes can combine const and default in the same file too

// QUESTION: export const vs export default - const use {}, default no need (just 1 thing)
// why require() instead of importing - inside an object/array/data - in JS data - otherwise, if regular function, just import 
// what are props exactly - an object containing stuff - anything u pass into the js component
// is imgSrc, children, altText etc like any name we set? - must be the same name - yes but children is a given when u put something in opening/closing tag
// must it be the same name when destructuring? yes

// QUESTION: plain text to json tools? and what's the point of props if we're gonna write out the html anyways in the component)

import Card from './Card';
import RecipeImg from './RecipeImg';
import RecipeInfo from './RecipeInfo';
import IngredientsList from './IngredientsList';
import IngredientsItem from './IngredientsItem';
import InstructionsList from './InstructionsList';
import InstructionsItem from './InstructionsItem';

export default function RecipeCard() {
    return(
        // <div> wrapper at first, but changed to Card cause it has div in it
        <Card>
            {/* HTML-like components but still JS town */}
            {/* RecipeImg component */}
            <div>
                {/* <img src={RECIPE.imgSrc} alt="pancake"/> */}
                {/* like attributes in HTML */}
                {/* no need {} for strings */}
                <RecipeImg imgSrc={RECIPE.imgSrc} altText={RECIPE.title} />
            </div>

            {/* layout div (miscellaneous) */}
            <div>
                {/* RecipeInfo component */}
                <RecipeInfo title={RECIPE.title} description={RECIPE.description} />
            </div>

            {/* flexbox */}
            <div>
                {/* IngredientsList component */}
                <div>
                    <h3>Ingredients with JSX</h3>
                    <ul>
                        {/* map to loop thru */}
                        {/* map(individual item, index) - index acts as key */}
                        {/* return with regular parentheses for jsx */}
                        {/* wrap in <li> */}
                        {/* if a fun just returns with no calculations, just use () instead of {}, with () no need return keyword */}
                        {/* {RECIPE.ingredients.map((ingredient, index) => {
                            return (<li>{ingredient}</li>)
                        })} */}
                        {/* shorthand with () */}
                        {/* Warning: Each child in a list should have a unique "key" prop.*/}
                        {/* need key to index and avoid warning */}
                        {RECIPE.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
                <IngredientsList ingredients={RECIPE.ingredients}></IngredientsList>

                <IngredientsItem>
                    {RECIPE.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                </IngredientsItem>

                {/* InstructionsList component */}
                {/* <div>
                    <h3>Instructions</h3>
                    <ol>
                        /* <InstructionsItem></InstructionsItem> pass array in here? 
                        {RECIPE.instructions.map((instruction, index) => {
                            return <li key={index}>{instruction}</li>
                        })}
                    </ol>
                </div> */}
                <InstructionsList>
                    <InstructionsItem>
                        {RECIPE.instructions}
                    </InstructionsItem>
                </InstructionsList>
            </div>
        </Card>
    )
}