import Api from "../../api/Api";
import {ProductActionTypes} from "./product.action.types";
import {getProduct, getProducts} from "./product.action";

const INITIAL_STATE = {
    products: [],
    singleProduct: {
        id: 1,
        category:'',
        title: 'title',
        price: 100,
        description: "description",
        img: '',
    }
}

const productReducer = (state = INITIAL_STATE, action) => {
    console.log('action', action);
    switch (action.type) {
        case ProductActionTypes.GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
            break;
        case ProductActionTypes.GET_SINGLE_PRODUCT:
            return {
                ...state,
                singleProduct: action.payload
            }
            break;
        default:
            return state;
    }

}

export const getAllProduct =()=>{
     return async (dispatch)=>{
        let data = await Api.getAll('products');
        dispatch(getProducts(data));
    }
}

export const getSingleProduct =(id)=>{
    return async (dispatch)=>{
        let data = await Api.getSingle('products',id);
        dispatch(getProduct(data));
    }
}




export default productReducer;