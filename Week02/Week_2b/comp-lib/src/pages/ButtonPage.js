import { FaAngry } from 'react-icons/fa'
import Button from '../components/Button'

export default function ButtonPage(props) {
    // condiitonal rendering
    // 100 || 200 => returns the FIRST truthy value (100)
    // false || 200 => returns 200
    // 100 && 200 => returns the 200 (if both true - choose last one)
    // null && 200 => returns first falsey value OR last truthy - either the FIRST truthy value (100) or the FIRST FALSEY value (100)

    const valueForCondition = false
    // if false, render danger
    // if true, renders primary

    return (
        // accordion page - own local state - where things live - open and closed state
        <div>
            {/* if left is true - render the RHS, else hiding it */}
            {/* if heart count > 5, x render + button anymore */}
            {valueForCondition && <Button primary />}

            {/* this will return the first truthy (aka button danger) */}
            {valueForCondition || <Button danger />}
            {/* <header>
                pretending this is a real site
            </header> */}
            <div>
            <Button primary rounded onClick={() => console.log('click')} className="mb-8">Click Me!</Button>
            </div>
            <div>
                <Button secondary>
                    <FaAngry />
                    Click Me!
                </Button>
            </div>
            <div>
                <Button success rounded>Click Me!</Button>
            </div>
            <div>
                <Button warning outline>Click Me!</Button>
            </div>
            <div>
                <Button danger outline rounded>Click Me!</Button>
            </div>
            {/* <footer>
                footer
            </footer> */}
        </div>
    )
}