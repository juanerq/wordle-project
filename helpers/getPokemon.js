import axios from 'axios'
const URL = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemon = async (id) => {
  try {
    const {data} = await axios.get(URL + id)
    return data

  } catch (error) {
    return error
  }
  
}

export default getPokemon