export default function IngredientsList(props) {
    // mapping inside component
    // destructure
    const {ingredients} = props
    return <div>
        <h3>Ingredients with attribute</h3>
        <ul>
        {ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
        </ul>
    </div>
    // use <></> to avoid problems if no parent - multiple DOMs
}