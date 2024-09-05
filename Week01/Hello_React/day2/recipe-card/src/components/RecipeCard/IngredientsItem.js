export default function IngredientsItem(props) {
    return <div>
        <h3>Ingredients with children</h3>
        <ul>{props.children}</ul>
    </div>
}