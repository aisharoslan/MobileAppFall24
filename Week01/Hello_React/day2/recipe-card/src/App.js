// can pass in props into App()
// can grab data, hit APIs etc before the return, but what user sees is in return
// css variables to store color
// need to import image if wanna use it
// organization is super important in react

import RecipeCard from'./components/RecipeCard'; // could change name here too if u want

export default function App() {
  // const message = 'Hello React';

  // const myObj = {
  //   name: 'Aisha',
  //   age: 22
  // }

  // react is a templating syste
  return (
    // <></> empty tag that x show up - react fragment - must be contained within a parent without explicitly being a div
    // adjacent elements must always be wrapped in ONE parent tag
    // <>
    //   <h1>Hello World</h1>
    //   <h1>{ message }</h1>
    //   <p>Hi my name is {myObj.name} and I am {myObj.age}</p>
    // </>
    <>
      <RecipeCard />
    </>
  );
}

// export default App; // so that can import to index.js

// another way to export
// import {Card} from './App.js'
// export const Card = () => {

// }