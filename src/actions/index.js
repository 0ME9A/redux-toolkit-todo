export const addTodo = ([...data]) =>{
    const [id, content] = data;
    return {
        type: "ADD_TODO",
        payload: {
            id: id,
            data: content
        }
    }
}
export const deleteTodo = (id) =>{
    return {
        type: "DELETE_TODO",
        id: id
    }
}
export const removeAllTodo = () =>{
    return {
        type: "REMOVE_ALL_TODO"
    }
}