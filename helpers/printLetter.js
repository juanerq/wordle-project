import colors from 'colors'
import colorList from '../colorsList.js'

const paintLetter = (letter, color = '') => {
  let newLetter = ` ${letter[0]} `

  if (!color in colorList)
    return `This "${color}" color does not exist - ${Object.keys(colorList).join(', ')}`

  switch(color) {
    case colorList.magenta: return colors.bgMagenta(newLetter)
    case colorList.yellow: return colors.bgYellow(newLetter)
    case colorList.gray: return colors.bgWhite(newLetter)
  }

}

export default paintLetter