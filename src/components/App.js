import React, {Component} from 'react';
import './styles.css'



class App extends Component
{
    constructor(props) {
        super(props);
        this.state={
            pagination:true
        }
    }


    render() {
        if (this.state.pagination) {
            return (
                <div>
                    <h1>hello we are setting a todo list</h1>
                    {/*<form id='formOne' onSubmit={event => {*/}
                    {/*    event.preventDefault()*/}
                    {/*    if (todo.values !== "") {*/}
                    {/*        let newList = {*/}
                    {/*            value: todo.values,*/}
                    {/*            checked: false*/}
                    {/*        }*/}
                    {/*        let tempList = []*/}
                    {/*        if (todo.list) {*/}
                    {/*            tempList = todo.list*/}
                    {/*        }*/}
                    {/*        tempList.push(newList)*/}
                    {/*        setTodo({...todo, list: tempList})*/}
                    {/*        setTodo({...todo, values: ""})*/}
                    {/*    }*/}
                    {/*}}>*/}
                    {/*    <input id='inputOne' type='text'*/}
                    {/*           value={todo.values} onChange={event => {*/}
                    {/*        setTodo({...todo, values: event.target.value})*/}
                    {/*    }}/>*/}
                    {/*    <input type='submit'/>*/}
                    {/*</form>*/}
                    {/*<ul>*/}
                    {/*    {*/}
                    {/*        todo.list.map(res => {*/}
                    {/*            return (<div>*/}
                    {/*                <li style={{display: "inline"}}*/}
                    {/*                    key={res.toString()}>{res.value}</li>*/}
                    {/*                <button type={"button"} onClick={() => {*/}
                    {/*                    todo.list.map(ex => {*/}
                    {/*                        if (ex.toString() == res.toString()) {*/}
                    {/*                            res.checked = !res.checked*/}
                    {/*                            console.log(res)*/}
                    {/*                        }*/}
                    {/*                    })*/}
                    {/*                }}>did*/}
                    {/*                </button>*/}

                    {/*            </div>)*/}
                    {/*        })}*/}
                    {/*</ul>*/}
                    <div>
                        <h1>Pagination button</h1>
                        <button type='button' onClick={() => {
                            this.setState({pagination: false})
                        }}>lets go</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    salam
                    <button type='button' onClick={()=>{this.setState({pagination:true})}}>lets go</button>
                    {console.log(this.state.pagination)}
                 </div>
            )
        }
    }
}

export default {
    component:App
}