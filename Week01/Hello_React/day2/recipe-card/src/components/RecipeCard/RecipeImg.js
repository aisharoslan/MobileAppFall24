export default function RecipeImg(props) {
    // use destructuring to pull out our imgSrc prop as its own variable
    const {imgSrc, altText} = props;
    return <img src={imgSrc} alt={altText}/>
}

// props = {
//     children: Some JSX Element,
//     imgSrc: require('...'),
//     altText: 'someString'
// }
// destructure to get individual values
// could also just do props.attribute if no need for destructuring