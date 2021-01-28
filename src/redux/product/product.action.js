import {ProductActionTypes} from "./product.action.types";

export const getProducts = products => ({
    type: ProductActionTypes.GET_ALL_PRODUCTS,
    payload: products
});

export const getCategoriesAC = categories => ({
    type: ProductActionTypes.GET_ALL_CATEGORIES,
    payload: categories
});

export const getInCategoryAC = products => ({
    type: ProductActionTypes.GET_IN_CATEGORY,
    payload: products
});

export const getProduct = product => ({
    type: ProductActionTypes.GET_SINGLE_PRODUCT,
    payload: product
});

export const deleteProduct = product => ({
    type: ProductActionTypes.DELETE_PRODUCT,
    payload: product
});

export const addProduct = product =>({
    type: ProductActionTypes.ADD_PRODUCT,
    payload: product
});

export const editPoductAC  = (product,id) =>({
    type: ProductActionTypes.EDIT_PRODUCT,
    id:id,
    payload: product
});