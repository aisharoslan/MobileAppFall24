// children if we have something living inside opening and closing tag
// e.g. IngredientsList has IngredientsItem

import './styles.css'
export default function Card(props) {
    return <div className="card">{props.children}</div>
}

// another way
// export default function Card(children) {
//     return <div>{children}</div>
// }