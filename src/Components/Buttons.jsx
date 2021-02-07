import NewQuote from "./NewQuote"
import TweetQuote from "./TweetQuote"

const Buttons = ({onClick}) => {
  return (
    <div className='buttons'>
      <NewQuote onClick={onClick}/>
      <TweetQuote />
      <div>this is text</div>
    </div>
  )
}

export default Buttons
