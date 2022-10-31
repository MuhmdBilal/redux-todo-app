import React, { useEffect, useState } from 'react'
import { addItem, update_item, delete_item, remove_item, Toggle_item, update_list } from "../../Redux/Action/Actions"
import "./Todo.css"
import { useDispatch,useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast';
import {todoReducers} from "../../Redux/Reducers/TodoReducers"
function Todo() {
    const [inputData, setInputData] = useState('')
    const dispate = useDispatch()
   let {editData, editId, idEdit} = useSelector((state)=> state.todoReducers);
    let list = useSelector((state)=> state.todoReducers.list)
    useEffect(()=>{
        setInputData(editData);
    },[editData])
    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <figcaption>TODO LIST APP</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)} 
                        />
                        
                        {
                            !idEdit ? 
                            <i className="fa fa-plus add-btn" title="Add Item" onClick={() => {

                                if(!inputData){
                                    toast.error("Please Enter Data")
                                } else{

                                    dispate(addItem(inputData, editId),setInputData(''))
                                    toast.success('Successfully toasted!')
                                }
                            
                            }}></i> :
                            <i className="far fa-edit add-btn" title="Update Item" onClick={() => {
                                if(!inputData){
                                    toast.error("Please Enter Data")
                                } else{
                                    dispate(update_list(inputData, editId),setInputData(''))
                                    toast.success('Successfully toasted!')
                                } 
                            }}></i> 
                        }
                    </div>

                    <div className="showItems">
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id} >
                                        <h3
                                        style={{
                                            textDecoration: elem.disabled ? "line-through" : "none"
                                        }}
                                        key={elem.id}
                                        className={elem.disabled  ? "todo strike" : "todo"}
                                        onClick={() => dispate(Toggle_item(elem.id))}
                                        >{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" title="Edit Item" 
                                            onClick={() => dispate(update_item(elem.id))}
                                            ></i>
                                            <i className="far fa-trash-alt add-btn" title="Delete Item"
                                            onClick={() => dispate(delete_item(elem.id))}
                                            ></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All"
                        onClick={()=> dispate(remove_item())}
                        ><span> CHECK LIST </span> </button>
                    </div>
                    <Toaster />
                </div>
            </div></>
    )
}

export default Todo