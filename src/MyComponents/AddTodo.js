import React,{useState} from 'react'
// import  TodoItem  from './TodoItem';

function AddTodo() {
  const [Articles,setArticles]=useState([]);
  // let articles=[];
  const [text,setText]=useState("");
  const [text1,setText1]=useState("Edit");
  
   
  const onchange=(event)=>{
    setText(event.target.value);
  }
  const add=()=>{
    const item= {
      id:Math.floor(Math.random()*1000),
      val:text
    };
    Articles.push(item);
    // setArticles(oldA)
    setText("");
  }
  let i=-1000;
  const editTodo=(id)=>{
    i=id;
   if(text1==="Edit"){
    setText1("Update");
   }
   else{
    // i=-1000;
    setText1("Edit");
   }
   setArticles(Articles);
  }

  const deleteTodo=(id)=>{
    console.log(id);
    const newarr=Articles.filter(item=>item.id!==id);
    setArticles(newarr);
  }
  const speak = (val) => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = val;
    window.speechSynthesis.speak(msg);
  }
  
  return (
    <div className="container w-75">
      <div className="input-group" >
  <span className="input-text"></span>
  <textarea className="form-control" aria-label="With textarea"value={text} onChange={onchange} placeholder="Enter Todo "></textarea>
  <button type="button"onClick={add} class="btn text-light bg-primary">Add Todo</button>
  </div>
  {
    Articles.map((e)=>{
      
        return (
        <div className="container my-2">
          <p className="bg-secondary w-100 text-light">{e.val}</p>
          {/* <button type="input"onClick={()=>editTodo(e.id)} className="btn text-light bg-primary">{text1}</button> */}
          <button type="button"onClick={()=>deleteTodo(e.id)} className="btn text-light bg-primary">Delete</button>
          <button type="button"onClick={()=>speak(e.val)} className="btn text-light bg-primary mx-1">Speak</button>
        </div>
      )
    })
  }
  </div>
  )
}

export default AddTodo
