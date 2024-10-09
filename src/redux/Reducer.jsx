export const initState = {
    count: 0,
    userName: "Hrithik"
}

export const CounterReducer = (state = initState, action) =>{ //we can write instead of action = {type, payload}
    switch(action.type){
        case "Increment":
            return {...state, count: state.count + action.payload}
        case "Decrement":
            return {...state, count: state.count - action.payload}
        default :
            return state;
    }
}