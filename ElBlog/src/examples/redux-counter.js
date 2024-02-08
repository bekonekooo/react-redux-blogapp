import {createStore} from "redux"


const initialState={
    count:0
  }
  
  //reducers
  
  const counterReducer =(state=initialState,action)=>{
    switch(action.type){
      case "INCREASE":
        const incrementBy= typeof action.incrementBy === "number" ? action.incrementBy :1;
        return{
          count:state.count+incrementBy
        }
        case "DECREASE":
          return{
            count:state.count-1
          }
          case "RESET":
            return{
              count: 0
            }
          default:
            return state
    }
    
    }
  
  //store
  const store =createStore(counterReducer)
  
  //get state
  // console.log(store.getState())
  store.subscribe(()=>{
    console.log(store.getState())
  })
  
  // INCREASE, DECREASE,RESET =>ACTIONS(OBJE)
  store.dispatch({
   
    type:"INCREASE",
    incrementBy:10
  })
  store.dispatch({
    type:"INCREASE"
  })
  // store.dispatch({
  //   type:"RESET"
  // })
  