import getRandomFromArray from "../utilis/getRandomFromArray"
import phrases from '../utilis/phrases.json'
import arrImages from '../utilis/arrimages.json'
import './styles/BtnPhrase.css'

const BtnPhrase = ({setPhrasesRandom, setimageSelected}) => {
 
    const handleClick = () => {
      const phrase = getRandomFromArray(phrases)
      setPhrasesRandom(phrase)
      
      const background = getRandomFromArray(arrImages)
      setimageSelected(background)
    }

    return (
    <div className="button" >
    <button className="card__button" onClick={handleClick}>
      Probar mi suerte
    </button>
    </div>
  )
}

export default BtnPhrase
