import {ProductActionTypes} from "./product.action.types";

export const getProducts = products => ({
    type: ProductActionTypes.GET_ALL_PRODUCTS,
    payload: products
})

export const getProduct = product => ({
    type: ProductActionTypes.GET_SINGLE_PRODUCT,
    payload: product
})