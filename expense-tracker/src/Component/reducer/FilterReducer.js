export function filterReducer(state, action){
  switch(action.type){
    case "SET_CATEGORY":{
      console.log("Selected Category", action.payload);
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