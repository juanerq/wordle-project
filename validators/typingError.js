const typingError = (word, baseWord, listOfWords) => {
  const characterLimit = baseWord.length
  let result = ''

  if (word == null || word.length === 0) {
    result = '👻 The word is missing'

  } else if (word.length !== characterLimit) {
    result = `📏 The word contains ${characterLimit} characters`

  } else if (!/^[a-zA-Z]+$/.test(word)) {
    result = '😴 Numbers are not allowed'

  } else if (listOfWords.includes(word)) {
    result = `📝 Have you already tried with ${word}`
  } 

  return result
    ? { error: result } 
    : { error: false }
}

export default typingError