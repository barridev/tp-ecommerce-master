export const initialState = {
    basket: [],
    loggedinuser: null
}

const reducer = (state, action) => {
    console.log(action);
    // eslint-disable-next-line
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'SET_LOGIN':
            return {
                ...state,
                loggedinuser: action.user
            }
        case 'REMOVE_FROM_CART':
            let newcart = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.ide === action.id)
            if(index >=0){
                newcart.splice(index,1)
            }else{
                console.log("Il y a eu une erreur pendant la suppression du produit depuis le panier ")
            }
            return {...state, basket: newcart}
            
        
            
    }
}

export default reducer 