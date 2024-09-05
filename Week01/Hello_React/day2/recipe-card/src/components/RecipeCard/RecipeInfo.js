export default function RecipeInfo(props) {
    // destructure
    const {title, description} = props
    return <div>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
}