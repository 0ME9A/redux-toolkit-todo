import React from 'react';
import { deleteTodo } from '../actions';
import { useDispatch } from 'react-redux';

function TodosComp(props) {
  const dispatch = useDispatch()

  const handleDelete =(id)=>{
    dispatch(deleteTodo(id));
  }

    return (
        <li id={props.id} className="flex justify-between hover:shadow-lg p-1 px-2 items-center rounded-lg border-2 border-white-100">
        <h3 className="text-dar">{props.title}</h3>
        <button type='button' className="bg-red-500 border-2 border-transparent focus:border-red-200 py-1 text-white px-3 rounded-lg" onClick={()=>{handleDelete(props.id)}}>delete</button>
      </li>
    );
}

export default TodosComp;