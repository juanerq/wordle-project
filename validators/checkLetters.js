import colorList from '../colorsList.js'
import paintLetter from '../helpers/printLetter.js'

const checkLetters = (word, baseWord) => {

  let checkedWord = baseWord.split('').map((e,i) => {
    if (word[i] === e) {
      return paintLetter(word[i], colorList.magenta)
    } else if (baseWord.includes(word[i])) {
      return paintLetter(word[i], colorList.yellow)
    } else {
      return paintLetter(word[i], colorList.gray)
    }
  })
  return checkedWord
}

export default checkLetters