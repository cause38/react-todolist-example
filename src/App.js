import './App.css';
import { useState } from 'react';

function App() {
  let [글제목, setTitle] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={()=>{
        let arr = 글제목;
        arr.sort();
        setTitle(arr)
      }}>가나다정렬</button>
      <div className="list">
        <h4>{ 글제목[0] } <span onClick={()=>setLike(like++)}>👍</span> { like }</h4>
        <p>2월 15일 발행</p> 
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 15일 발행</p> 
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>2월 15일 발행</p> 
      </div>

    </div>
  );
}

export default App;
