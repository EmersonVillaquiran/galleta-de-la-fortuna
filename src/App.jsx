import { useState } from 'react'
import './App.css'
import phrases from './utilis/phrases.json'
import getRandomFromArray from './utilis/getRandomFromArray'
import PhraseCard from './components/PhraseCard'
import BtnPhrase from './components/BtnPhrase'
import arrImages from './utilis/arrimages.json'

function App() {
  
  const initialValue = getRandomFromArray(phrases)
  const [phrasesRandom, setPhrasesRandom] = useState(initialValue)

  const initialImagen = getRandomFromArray(arrImages)
  const [imageSelected, setimageSelected] = useState(initialImagen)


  const objStyle = {
    backgroundImage: `url("/fondo${imageSelected}.png")`
  }

  return (
    <div className='app' style={objStyle}>
      <h1 className='tittle'>Galletas de la fortuna</h1>
      <PhraseCard phraseRandom={phrasesRandom}/>
      <BtnPhrase 
      setPhrasesRandom={setPhrasesRandom}
      setimageSelected={setimageSelected}
      />
    </div>
  )
}

export default App
