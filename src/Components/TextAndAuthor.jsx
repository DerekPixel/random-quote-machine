import Author from "./Author"
import Text from "./Text"

const TextAndAuthor = ({text, author}) => {
  return (
    <div className='textandauthor'>
      <Text text={text}/>
      <Author author={author}/>
    </div>
  )
}

export default TextAndAuthor
