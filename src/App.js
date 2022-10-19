import { useState } from "react";
import TodosComp from "./components/TodosComp";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeAllTodo } from "./actions/index";

function App() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo([Math.random() * 50, input]))
    setInput('')
  }


  return (
    <div className="App min-h-screen flex justify-center items-center text-center">
      <header className="App-header p-5 w-96 rounded-lg">
        <h1 className="font-bold text-xl border-b-2">Redux-Toolkit Todos</h1>

        <form className="mt-5 border-2 p-1 px-2 rounded-lg" onSubmit={(e) => { handleSubmit(e) }}>

          <div className="flex justify-between items-center rounded-lg gap-2">
            <input className="w-full focus:outline-none h-full py-2 rounded-lg" placeholder="Write Todos..."
              value={input}
              onChange={(e) => { setInput(e.target.value) }} />
            <button className="bg-blue-500 border-2 border-transparent focus:border-blue-200 py-1 text-white px-3 rounded-lg">Create</button>
          </div>
        </form>

        <ul className="mt-5 flex flex-col gap-2">
          {
            list && list.map((items) => {
              return (
                <TodosComp key={'key' + items.id} id={items.id} title={items.data} />
              )
            })
          }
        </ul>
        <button onClick={() => dispatch(removeAllTodo())} className="bg-red-500 border-2 border-transparent focus:border-red-200 py-1 text-white px-3 mt-5 rounded-lg">Clear Todos</button>
      </header>
    </div>
  );
}

export default App;
