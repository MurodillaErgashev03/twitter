import { combineReducers, createStore } from "redux";


const favoriteReductor = (state = [], action) => {
    
    if (action.type === "add") {
     
   
        const newArray = [...state, action.payload]
        return newArray;
       
   

       
    }
   
    return state;
}

const combineReduster = combineReducers({
   
    favorite: favoriteReductor,
})
export const store = createStore(combineReduster);
