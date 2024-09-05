export default function InstructionsList(props) {
    // mapping inside component
    // destructure
    return <div>
        <h3>Instructions with InstructionsItem child</h3>
        <ol>{props.children}</ol>
    </div>
    // use <></> to avoid problems if no parent - multiple DOMs
}