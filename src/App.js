import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoadComments></LoadComments>
      </header>
    </div>
  );
}

function LoadComments(){
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then(res => res.json())
    .then(data => setComments(data))
  },[])
  return(
    <div>
      <h3>{comments.length}</h3>
      {/* <small>Id: </small>
      <h1>Name: </h1>
      <p>Email: </p> */}
      {
        comments.map(comment => <Comment email={comment.email} body={comment.body}></Comment>)
      }
    </div>
  )
}
function Comment(props){
  return(
    <div>
      <h4>Email: {props.email}</h4>
      <p>{props.body}</p>
    </div>
  )
}

export default App;
