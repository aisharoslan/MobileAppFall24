export default function InstructionsItem(props) {
    // pass in array of instructions
    return <>{props.children.map((instruction, index) => (
        <li key={index}>{instruction}</li>
    ))}</>
}