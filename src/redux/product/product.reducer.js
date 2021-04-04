import Api from "../../api/Api";
import {ProductActionTypes} from "./product.action.types";
import {
    getProduct,
    getProducts,
    deleteProduct,
    addProduct,
    editPoductAC,
    getCategoriesAC,
    getInCategoryAC
} from "./product.action";

const INITIAL_STATE = {
    products: [],
    categories:[],
    singleProduct: {
        id: 1,
        category:'',
        title: '',
        price: 100,
        description: '',
        img: '',
        uploead_file:''
    }
}

const productReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case ProductActionTypes.GET_ALL_PRODUCTS:
            console.log('action in r', action.payload);
            return {
                ...state,
                products: action.payload
            }
        case ProductActionTypes.GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ProductActionTypes.GET_IN_CATEGORY:
            return {
                ...state,
                products: action.payload
            }
        case ProductActionTypes.GET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.payload
            }
        case ProductActionTypes.DELETE_PRODUCT:
            return {
                ...state,
                products: [...state.products.filter((e, i) => {
                    return e.id !== action.payload;
                })]
            }
        case ProductActionTypes.ADD_PRODUCT:
            return {
                ...state,
                products: [state.products, action.payload]
            }
        case ProductActionTypes.EDIT_PRODUCT:
            return {
                ...state,
                products: [state.products.map((e,i)=>{
                    if(e.id === action.id) {
                        e = action.payload;
                    }
                    return e;
                })]
            }
        default:
            return state;
    }

}

export const getAllProduct = () => {
    return async (dispatch) => {
        let data = await Api.getAll('products');
        dispatch(getProducts(data));
    }
}

export const getAllCategories = () => {
    return async (dispatch) => {
        let data = await Api.getAllCategories('products');
        dispatch(getCategoriesAC(data));
    }
}

export const getInCategoriesProducts = (category  = "") => {
    if(category === "") {
        return
    }
    return async (dispatch) => {
        let data = await Api.getInCategories('products', category);
        dispatch(getInCategoryAC(data));
    }
}


export const getSingleProduct = (id) => {
    return async (dispatch) => {
        let data = await Api.getSingle('products', id);
         dispatch(getProduct(data));
    }
}

export const addProductSingle = (product) => {
    return async (dispatch) => {
        await Api.addNew('product', product)
        dispatch(addProduct(product))
    }
}

export const editProductSingle = (productId, productData) => {
    return async (dispatch) => {
        await Api.updateItem('product', productId, productData)
        dispatch(editPoductAC(productData, productId))
    }
}

export const delProduct = (id) => {
    return async (dispatch) => {
        await Api.deleteItem('products', id);
        dispatch(deleteProduct(id));
    }
}


export default productReducer;