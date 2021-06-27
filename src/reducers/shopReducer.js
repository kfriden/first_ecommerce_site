import {
    SET_SHOP_CATEGORIES,
    SET_SHOP_PRODUCTS,
    FILTER_PRODUCTS_WITH_CATEGORY_ID,
    FILTER_PRODUCTS_WITH_QUERY,
    SET_PURCHASE_DETAIL
} from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    products: [],
    filteredProducts: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_SHOP_CATEGORIES:
        const categories = action.payload;
            return {
                ...state,
                categories
            }
        case SET_SHOP_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case FILTER_PRODUCTS_WITH_CATEGORY_ID:
            var filteredProducts = [];
            state.products.map(product => {
                if(product.belongsTo.includes(action.payload)) {
                    filteredProducts.push(product);
                }
            })
            return {
                ...state,
                filteredProducts
            }
        case FILTER_PRODUCTS_WITH_QUERY:
            var filteredProducts = [];
            state.products.map(product => {
                if(product.title.toLowerCase().includes(action.payload.query.toLowerCase())) {
                    filteredProducts.push(product)
                }
            })
            return {
                ...state,
                filteredProducts
            }
    
        default: return state;
    }
}