import { useEffect, useState } from 'react'
import cx from 'classnames' // for conditional classnames
// import images and rename to these
import CardPattern from './assets/moroccan-flower-dark.png'
import Bilbo from './assets/bilbo-baggins.png'
import Cameron from './assets/cameron-poe.png'
import Nikki from './assets/nikki-cage.png'
import Pollux from './assets/pollux-troy.png'

// MUST NAME modules like this, must rename and use module.css
// diff style sheets for diff grps of components
// prefix Ui and end is random, if wanted another style sheet, it becomes useful when u wanna reuse for a different component, scopes css to where it's imported from, e.g. cld have forms.container and it'd rename the classname - scoped css! they live and die only where they're imported and can reuse bc it'll hv unique ids
import styles from './UI.module.css'

const cardImages = [
  {src: Bilbo, matched: false}, 
  {src: Cameron, matched: false}, 
  {src: Nikki, matched: false}, 
  {src: Pollux, matched: false}
]

// function to shuffle cards
// need to handle state of card

export default function Grid(props) {
  // state to store our deck of cards
  // starting state is empty array
  const [ cards, setCards ] = useState([])

  // state to keep track of our turns
  const [ turns, setTurns ] = useState(0)

  // keep track of our choices
  const [ choiceOne, setChoiceOne ] = useState(null)
  const [ choiceTwo, setChoiceTwo ] = useState(null)

  // general purpose function to randomize/shuffle images
  // a function to double our cards (so each as a duplicate)
  // and then shuffle the deck ... and deal them on the screen
  const shuffleCards = () => {
    // spread our img array 2x so we have an array with duplicates to shuffle
    /// ... means UNPACK SOMETHING!! e.g. copy everything from cardImages array, grab each item - unpacking/spreading them into ANOTHER array
    // this basically copies and pastes it and 2x for DUPES
    const shuffledCards = [...cardImages, ...cardImages]
    // add a sort function which fires a function for each item in our new array
    // array.sort() from js
    // when a random number is negative, leave the item we are on where it is
    // if it is positive, swap with another random item to shuffle
    // 1/2 times random, if > 0, swap with another, and if < 0, leave it
    // if > 0 -> we sort/shuffle, Math.random between 0 and 1
    // x want curly braces cause we wanna return this value
    .sort(() => Math.random() - 0.5 )

    // add a mapping function to add an ID property to each img object
    // first we spread the current properties and then add a new one at the end
    // use parentheses here cause we wanna return the entire thing
    .map((card) => (
      // each object in arr
      // COPY first and then add on attribute
      {...card, id: Math.random()}
    ))

    // use our setter from useState to add our new array of doubled, shuffled objects with unique ID property added to each
    setCards(shuffledCards) // assigns the shuffledCards to cards

    // reset our turns to 0 when we deal a new shuffled card deck
    setTurns(0)
    // IF PROP/STATE CHANGES, everything re-renders, but everything we did up here x matter - x re-render (for the array part)
  }

  // console.log(cards)

  const handleChoice = (card) => {
    console.log(card)
    // check if we have a choice one
    // if we don't have a choiceOne set, make the current card choiceOne
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)

    // useEffect gets fired when a component gets mounted!! e.g. if everytime reload page, the function would fire for Grid

    // what if we have a choiceOne and a choiceTwo set?
    // we need to compare them, but NOT HERE! bc here too quick and can be wrong
    // we need to use useEffect!!
  }

  // if empty array, just fire once when the component loads, can watch for states in the array too, whenever choiceOne or choiceTwo change, we call useEffect
  useEffect(() => {
    // this is where we compare
    // first we make sure we have both choices:
    if (choiceOne && choiceTwo) {
      // compare src in each card to see if they match
      if (choiceOne.src === choiceTwo.src) {
        // we have access to prev state of cards
        setCards((prevCards) => {
          // map through the entire array of cards, and set the matched ones to matched=true
          return prevCards.map((card) => {
            // if they match, set matched to true for those 2 cards
            if (card.src === choiceOne.src) {
              console.log('these cards match')
              // return new object, we spread/copy the whole old card and OVERRIDE existing MATCHED property to new state
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })

        resetTurn()

      } else {
        console.log('these cards DO NOT match')
        setTimeout(() => resetTurn(), 1000) // to see both cards before they flip if x match
      }
    }
  }, [choiceOne, choiceTwo])

  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns((prevTurns) => prevTurns + 1)
  }

  return (
    <>
      <button onClick={shuffleCards}>New Game</button>
      <div className={styles.container}>
        {/* css grid */}
        <div className={styles.grid}>
          {/* MAP AND RENDER THRU ITEMS AS A COMPONENT IN REACT - IMPORTANT! */}
          {
            // parentheses to return EVERYTHING!
            cards.map((card) => (
              <Card 
              key={card.id} 
              card={card} 
              handleChoice={handleChoice} 
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              />
            ))
          }
        </div>
      </div>
      <div>Turns: { turns }</div>
    </>
  )
}

// this is usually a component
// export vs export default -> import differently
function Card(props) {
  const { card, handleChoice, flipped } = props

  // remove hover and do it onclick instead
  // keep track of flipped/active in state
  // const [ isActive, setIsActive ] = useState(false) - no need anymore cause we get it in from props flipped

  // toggle between active and inactive, get click event
  const handleClick = (event) => {
    // toggle active state, NEVER DIRECTLY MUTATE isActive (state), USE SETTER!!
    // page may not re-render
    // setIsActive((current) => !current)
    handleChoice(card)
  }

  return (
    <div className={styles.flip_card}>
      {/* for css module - put in array */}
      {/* it activates a style based on a state */}
      <div 
      onClick={handleClick} 
      className={ cx(styles.flip_card_inner, { [styles.flipped]: flipped }) }>
        <div className={styles.flip_card_front}>
          <img src={CardPattern} alt="card back" />
        </div>
        <div className={styles.flip_card_back}>
          <img src={card.src} alt="card front" />
        </div>
      </div>
    </div>
  )
}
