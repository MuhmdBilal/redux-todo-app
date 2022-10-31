let initailData = {
    list: [],
    toggleSubmit: true,
    editId: "",
    editData:"",
    idEdit:false,
}

export const todoReducers = (state = initailData, action) => {
    switch (action.type) {
        case "ADD_ITEMS":
            const { id, data, disabled } = action.payload
            
            return {
                ...state,
                list: 
                [
                    ...state.list, 
                    {
                        id: id,
                        data: data,
                        disabled: disabled
                    }
                ]
            }
            case "REMOVE_ITEMS" :
                return{
                list: []
                }
            case "DELETE_ITEMS":
                const newList = state.list.filter((elem) => elem.id !== action.id) 
                return {
                ...state,
                list: newList
                }

            case "TOGGLE_ITEMS" : 
             const toggleList = state.list.map((todo) =>{
                console.log("todo", todo.id);
               return todo.id == action.id ? {...todo, disabled: !todo.disabled} : {...todo}
             })
            return {
                ...state,
             list: toggleList
            }
            case "UPDATE_ITEMS": 
            const newEditItem = state.list.find((elem)=>{
                return elem.id === action.id
            }) 
           console.log("newEditItem",newEditItem);
            return {
                ...state,
                editData: newEditItem.data,
                idEdit: true,
                editId: action.id
            }
            case "UPDATE_LIST" :
                const {datas, ids} = action.payload;
                const updatedArray=[];
                state.list.map((item)=>{
                    if(item.id== ids){
                        item.id = ids;
                        item.data = datas;
                    }
                    updatedArray.push(item);
                })
                
                return {
                    list: updatedArray
                    
                    }
                

        default:
            return state;
    }
}