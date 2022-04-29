import Comment from './components/Comment';

import './App.css';

const comment = [
{
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
},
{
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
},
{
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'http://placekitten.com/g/64/64'
  }
}

]

function App() {
  return(
     <div className='App'> 
     {comment.map((el) => {
        return(
       <Comment key = {Math.random()}
              author = {el.author}
              text = {el.text}
              date = {el.date}/>
        )
     
        })} 
    </div> 
    )   
  }
      

export default App;
