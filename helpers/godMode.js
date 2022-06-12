import path from 'path'
import fs from 'fs'

export const godMode = (response) => {
  const GOD_MODE = !!process.env.GOD_MODE

  if(GOD_MODE) {
    fs.writeFile('./result.txt', response, (error) => {
      if (error) console.error(error)
    })
  }
}
