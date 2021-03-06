import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL,
    SET_CART_PRODUCTS,
    ADD_CART_PRODUCT,
    AUTHENTICATE_USER
} from './types';

export function signIn({email, password}) {
    console.log({email, password});
    return({
        type: AUTHENTICATE_USER,
        payload: {
            user: {
                _id: 0,
                name: 'Kaitlyn Friden',
                address: '1234 Fake Street',
                cartProducts: []
            }
        }
    })
}

export function setPurchaseDetail(_id) {
    console.log(_id);
    return({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}

export function addCartProduct(product) {
    return ({
        type: ADD_CART_PRODUCT,
        payload: product
    })
}

export function fetchCartProducts() {
    return ({
        type: SET_CART_PRODUCTS,
        payload: [
            {
               _id: 0,
               product: {
                _id: 0,
                title: 'JavaScript in the Browser',
                description: 'ehjwuewhnrfjnjfdgndfujg. This is a sentence. Hi! ',
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
               },
               quantity: 2
            },
            {
                _id: 1,
                product: {
                    _id: 1,
                title: 'Graph Database',
                description: 'ehjwuewhnrfjnjfdgndfujg. This is a sentence. Hi!',
                price: 1.99,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
                },
                quantity: 1
            },
            
        ]
    })
}

export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 8.02,
                orderNumber: 'A0048248343',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Hudgens',
                    shippingAddress: '1234 West State Street',

                }
            },
            {
                _id: 1,
                total: 50.99,
                orderNumber: 'A55UNHG80F',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Luise Cachorro',
                    shippingAddress: '123 Fake Street',

                }
            },
            {
                _id: 2,
                total: 10.14,
                orderNumber: 'P990CDF211',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Homer Simpson',
                    shippingAddress: '742 Evergreen Terrace',

                }
            },
            {
                _id: 3,
                total: 42.00,
                orderNumber: 'HU3376FR$',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Benjamin Tellie',
                    shippingAddress: '950 Alps Hill',

                }
            },
            {
                _id: 4,
                total: 13.17,
                orderNumber: '7UUCVF890D',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Maddie Belchamp',
                    shippingAddress: '87 West Circuit',

                }
            },
            {
                _id: 5,
                total: 10.70,
                orderNumber: 'T00CFM5189',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Kit Borden',
                    shippingAddress: '88 Rainbow Road',

                }
            },
            {
                _id: 6,
                total: 72.35,
                orderNumber: 'VEN00231SW',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Laura Bard',
                    shippingAddress: '23 Garden Valley Road',

                }
            },
            {
                _id: 7,
                total: 23.50,
                orderNumber: 'A07GGYOP3',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Masie Francis',
                    shippingAddress: '42 Kaiser Street',

                }
            },
            
            
        ]
    })
}