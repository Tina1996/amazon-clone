export const initialState = {
    basket: [],
    user:null
}

export const getBasketTotal = (basket) => 
basket?.reduce((amount,item) => item.price + amount,0);

export const reducer = (state=initialState,action) => {
    console.log("action",action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item]
            }

        case 'REMOVE_BASKET':{
            return{
                ...state,
                basket:[]
            }
        }
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(basketItem=> basketItem.id === action.id)
            const newBasket = [...state.basket]
            if(index>=0){
                newBasket.splice(index,1)
            }else{
                console.warn(`Cant remove product with id ${action.id}`)
            }
            return {
                ...state,
                basket:newBasket
            }
            
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
            
        default:
            return state
    }

}
