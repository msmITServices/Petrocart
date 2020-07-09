import {createSelector} from 'reselect';

const selectCart=state=>state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart=>cart.cartItems
);

export const selectCartHidden = createSelector(
[selectCart],
    cart=>cart.hidden
)

export const selectItemCounts = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedquantity,cartitem)=>accumalatedquantity+cartitem.quantity,
        0
    )
);
export const selectCountTotal = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce(
        (accumalatedquantity,cartitem)=>accumalatedquantity+cartitem.quantity*cartitem.price,
        0
    )
)