import React, {useState} from 'react';
import {v1 as uuid} from 'uuid'

function App()
{
    const [todo,setTodo]=useState({list: [{id: 0,value: ""}] , values: ""})
    const inputOne
        return (
            <div>
                <h1>hello we are setting a todo list</h1>
                <form id='formOne' onSubmit={event => {
                    event.preventDefault()
                    let newList={
                        id:uuid(),
                        value:todo.values
                    }
                    let tempList=[]
                    if(todo.list){
                        tempList=todo.list
                    }
                    tempList.push(newList)
                    setTodo({...todo,list: tempList})
                    setTodo({...todo,values: ""})
                }}>
                    <input id='inputOne' type='text'
                           value={todo.values} onChange={event => {
                         setTodo({...todo,values:event.target.value})}} ref={ref=>this.inputOne=ref}/>
                    <input type='submit'/>
                </form>
                <ul>
                    {todo.list.map(res=>{
                        return <li key={res.id}>{res.value}</li>
                    })}
                </ul>
            </div>
        );
}

export default {
    component:App
}