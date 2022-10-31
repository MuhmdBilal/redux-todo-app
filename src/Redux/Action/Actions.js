export const addItem = (data)=>{
    return {
        type: "ADD_ITEMS",
        payload: {
            id: new Date().getTime().toString(),
            data: data,
            disabled: false,
        }
    }
}
export const update_list = (datas, ids) =>{
    return {
        type: "UPDATE_LIST",
        // ids
        payload:{
            datas,
            ids
            
        }
    }
}
export const update_item = (id)=>{
    return {
        type : "UPDATE_ITEMS",
        id : id

    }
}
export const delete_item = (id)=>{
    
    return {
        type : "DELETE_ITEMS",
        id
    }
}
export const remove_item = ()=>{
    return {
        type : "REMOVE_ITEMS"
    }
}
export const Toggle_item = (id)=>{
    return {
        type : "TOGGLE_ITEMS",
        id
    }
}