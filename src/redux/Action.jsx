export const Increment = "Increment";
export const Decrement = "Decrement";

export const increment = (payload) =>{
    return {
        type: Increment,
        payload
    }
}

export const decrement = (payload) =>{
    return {
        type: Decrement,
        payload
    }
}