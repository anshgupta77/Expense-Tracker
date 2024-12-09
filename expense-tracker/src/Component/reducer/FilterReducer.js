export function filterReducer(state, action){
  switch(action.type){
    case "SET_CATEGORY":{
      return {
        ...state,
        selectedCategory : action.payload
      }
    }
    default:{
      return state;
    }
  }
}

export const initialFilterState = {
    selectedCategory : ""
}