import NewQuote from "./NewQuote"
import TweetQuote from "./TweetQuote"

const Buttons = ({onClick}) => {
  return (
    <div className='buttons'>
      <NewQuote onClick={onClick}/>
      <TweetQuote />
    </div>
  )
}

export default Buttons
