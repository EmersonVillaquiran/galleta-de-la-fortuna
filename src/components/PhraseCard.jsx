import './styles/PhraseCard.css'

const PhraseCard = ({phraseRandom}) => {
  
    const {phrase, author} = phraseRandom

    return (
    <div>
        <h2 className="phrase">{phrase} </h2>
        <div className="author__div">
        <h3 className="author">Fuente: {author}</h3>
        </div>
    </div>
  )
}

export default PhraseCard
