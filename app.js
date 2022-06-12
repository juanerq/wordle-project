import getPokemon from './helpers/getPokemon.js'
import { godMode } from './helpers/godMode.js'

import { checkLetters, typingError } from './validators/index.js'

const listOfWords = []
const coloredWordList = []

let stdin = process.openStdin()

const pokemonRandom = Math.floor(Math.random() * (900 - 1)) + 1;

getPokemon(pokemonRandom).then(async (res) => {
  const WORD_TO_GUESS = res.name.toUpperCase()
  
  godMode(WORD_TO_GUESS)

  console.clear()
  console.log('🔍 Guess the word...')

  stdin.on("data", function(d) {
    const word = d.toString().trim().toUpperCase()
    const { error } = typingError(word, WORD_TO_GUESS, listOfWords)
  
    if (error) {
      console.error(error)
  
    } else {
      const letters = checkLetters(word, WORD_TO_GUESS)
  
      listOfWords.push(word)
      coloredWordList.push(letters)
  
      printGame()
  
      if (word === WORD_TO_GUESS) {
        console.log('🥳 You guesse!')
        
        return process.exit()
  
      }
      console.log('🔍 Guess the word...')
    }
  })
})

function printGame() {
  console.clear()
  coloredWordList.forEach(e => console.log(e.join(' '), '\n'))
}

