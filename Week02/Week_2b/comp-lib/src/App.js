// import external libraries before components, then files, data css etc

import ButtonPage from './pages/ButtonPage'

export default function App() {
    return <ButtonPage />
    // <>
    //     {/* Click Me! is props.children for Button component */}
    //     {/* <Button>Click Me!</Button> */}
    //     {/* <Button className=""></Button> - defeats purpose, we want multiple styles for the button - so now pass props in as boolean - purpose = color, variants = outlined, rounded etc, 3 shapes, 5 colors = 15 types */}
    //     {/* like the required attr in forms - just checks existence - if x exist, false, else true */}
    //     {/* tailwind css - atomic styling - a soup of class names to create a style */}
    //     {/* <Button primary outline></Button> */}
        
    // </>)
}

// use icons for + and - button
// style with tailwind css
// turn into a page - conditional rendering
