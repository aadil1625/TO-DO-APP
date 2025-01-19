import React, { useEffect, useState } from 'react';
import './CSS/List.css';
import {AiOutlineDelete} from 'react-icons/ai';
import {BsCheck} from 'react-icons/bs';
import Navbar from './Navbar';
import MainPageNavbar from './MainPageNavbar';
import Footer from './Footer';

export default function List() {

  const[isCompleteScreen,setIsCompleteScreen] = useState(false);
  const[todos,setTodos] = useState([]);
  const[newTitle,setNewTitle] = useState("");
  const[newDescription,setNewDescription] = useState("");
  const[completedTodos,setCompletedTodos] = useState([]);
  const [currentEdit,setCurrentEdit] = useState("");
  const [currentEditedItem,setCurrentEditedItem] = useState("");

  const handleAddTodo = () => {
    let newTodoItem = {
      title : newTitle,
      desciption : newDescription
    }

    let updatedTodoArr = [...todos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist',JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo = (index) =>{
    let reducedTodo = [...todos];
    reducedTodo.splice(index);

    localStorage.setItem ('todolist',JSON.stringify (reducedTodo));
    setTodos (reducedTodo);
  };

  const handleComplete = (index) =>{
    let now =new Date();
    let dd = now.getDate();
    let mm =now.getMonth()+1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn = dd + '-' + mm + '-' + yyyy + '  ' + 'at' + '  ' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...todos[index],
      completedOn : completedOn,
    };

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);

    handleDeleteTodo(index);
    localStorage.setItem ('completedTodos',JSON.stringify (updatedCompletedArr));
  };

  const handleDeleteCompletedTodo = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index);

    localStorage.setItem ('completedTodos',JSON.stringify (reducedTodo));
    setCompletedTodos (reducedTodo);
  };

  

  useEffect(() =>{
    let savedTodo = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedTodo = JSON.parse (localStorage.getItem ('completedTodo'));
    if(savedTodo){
      setTodos(savedTodo);
    }

    if(savedCompletedTodo){
      setCompletedTodos(savedCompletedTodo);
    }
  },[]);

  const handleEdit = (ind,item)=>{
    console.log(ind);
    setCurrentEdit(ind);
    setCurrentEditedItem(item);
  };

  const handleUpdateTitle = (value)=>{
    setCurrentEditedItem((prev)=>{
      return {...prev,title:value}
    });
  };

  const handleUpdateDescription = (value)=>{
    setCurrentEditedItem((prev)=>{
      return {...prev,description:value}
    });
  };

  const handleUpdateToDo = ()=>{
      let newToDo = [...todos];
      newToDo[currentEdit] = currentEditedItem;
      setTodos(newToDo);
      setCurrentEdit("");
  };

  return (
    <>
    <MainPageNavbar/>
    <div className='todo'> 
    <h1>My Todos</h1>

    <div className='todo-wrapper'>
      <div className='todo-input'>
        <div className='todo-input-item'>
          <label>Title : </label>
          <input type="text" value={newTitle} onChange={(e)=>setNewTitle(e.target.value)} placeholder="Task's Title" />
        </div>

        <div className='todo-input-item'>
          <label>Descripton : </label>
          <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)} placeholder="Task's Description" />
        </div>
        <div className='todo-input-item'>
         <button className='add-btn' onClick={handleAddTodo}>Add</button>
        </div>
      </div>
      <div className='btn-area'>
        <button className={`sec-btn ${isCompleteScreen === false ? 'active' : ''}`} onClick={() => setIsCompleteScreen(false)}>
             To Do
        </button>
        <button className={`sec-btn ${isCompleteScreen === true ? 'active' : ''}`} onClick={() => setIsCompleteScreen(true)}>
             Completed
        </button>
      </div>
      <div className='todo-list'>

        {isCompleteScreen===false && todos.map((item,index) => {
          if(currentEdit===index){
            return(
              <div className='edit__wrapper' key={index}>
              <input placeholder='Updated Title' 
              onChange={(e)=>handleUpdateTitle(e.target.value)} 
              value={currentEditedItem.title}  />
              <textarea placeholder='Updated Title' 
              rows={4}
              onChange={(e)=>handleUpdateDescription(e.target.value)} 
              value={currentEditedItem.description}  />
               <button
          type="button"
          onClick={handleUpdateToDo}
          className="add-btn"
        >
          Update
        </button>
          </div> 
             ) 
          }else{
          return(
            <div className='todo-list-item' key={index}>
          <div>
          <h1>{item.title}</h1>
          <p>{item.desciption}</p>
        </div>
        <div>
          <AiOutlineDelete className='icon' onClick={()=>handleDeleteTodo(index)} title='Delete?'/>
          <BsCheck className='check-icon' onClick={()=>handleComplete(index)} title='Complete?'/>
        </div>
        </div>  
          );
        }
        })}

        {isCompleteScreen===true && completedTodos.map((item,index) => {
          return(
            <div className='todo-list-item' key={index}>
          <div>
          <h1>{item.title}</h1>
          <p>{item.desciption}</p>
          <p><i> Completed On: {item.completedOn}</i></p>
        </div>
        <div>
          <AiOutlineDelete className='icon' onClick={()=>handleDeleteCompletedTodo(index)} title='Delete?'/>
         </div>
        </div>  
          )
        })}
      
      </div>

    </div>
    </div>
    <Footer/>
    </>
  );
}
