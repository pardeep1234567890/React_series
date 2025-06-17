//Slice :In Redux Toolkit, a slice is a way to organize Redux state and logic. It represents a part of your state and contains the initial state, reducers, and actions all in one place
import { createSlice,nanoid } from "@reduxjs/toolkit";
 
const initialState = {
    todos:[{ id:1 , text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'todo',   //Slice name 
    initialState,
    reducers: {
        addTodo : (state,action) => { // state gives the initial state me kya h abhi vo , and action used to update it
            const todo = { 
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )//matching id filter , filter and remove non matching id and makes the new array of non-matching id {unko filter(filter mtlb unka new array bna deti hai filter karke jinki id match nahi karti and uske baad removeTodo() unko remove kar deta hai) karti hai jinki id match nahi karti}
        },
    }
})
// individual (reducers)functionalites ko export karte hai 
export const {addTodo,removeTodo} = todoSlice.actions

//export all reducers
export default todoSlice.reducer