import axios from "axios";

let domen = 'http://127.0.0.1:8000/api/petshop/';
const Api = {
    getAll: (items = 'products') => {
        return fetch(`${domen}${items}`)
            .then(res => res.json())
            .then(json => {
                return json
            }).then()
    },

    getAllCategories: (items = 'products') => {
        return fetch(`${domen}${items}/categories`)
            .then(res => res.json())
            .then(json => {
                return json
            })
    },

    getInCategories: (items = 'products', category) => {
        console.log('category in dal', category);
        return fetch(`${domen}${items}/category/${category}`)
            .then(res => res.json())
            .then((json) => {
                return json
            })
    },

    getSingle: (items = 'products', id = '1') => {
        return fetch(`${domen}${items}/${id}`)
            .then(res => res.json())
            .then(json => {
                return json
            });
    },

    getLimit: (items = 'products', limit = '5') => {
        return fetch(`${domen}${items}?limit=${limit}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    getSort: (items = 'prducts', sort = 'desc') => {
        return fetch(`${domen}${items}?sort=${sort}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    addNew: (items = 'products', product = {}) => {
        return fetch(`${domen}${items}/add`, {
            method: "POST",
            body: JSON.stringify(product)
        }).then(res => console.log('res', res))

    },

    updateItem: (items = 'product', id, product = {}) => {
        alert("Put");
        return axios.put(`${domen}${items}/update/${id}`,
            {
                product
            }
        ).then(res => console.log("Updated", res))
    },


    deleteItem: (items = 'products', id) => {
        return fetch(`${domen}${items}/delete/${id}`, {
            method: "DELETE"
        }).then(json => console.log("delete json", json))
    },

    registerUser: (params) => {
        let config = {
            headers: {
                'accept': 'application/json',
            }
        }
        return axios.post(`http://127.0.0.1:8000/register`, params, config)
            .then(response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error);
            })
    },


    loginUser: {
        getJwtToken: (params) => {
            let config = {
                headers: {
                    'accept': 'application/json',
                }
            }

            return axios.post(`http://127.0.0.1:8000/authentication_token `, params, config)
                .then(response => {
                    console.log(response.data.token)
                    if (response.data.token) {
                        localStorage.setItem("jwt_token", response.data.token);
                        return response.data.token;
                    }
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },

    userLogout: () => {
        localStorage.removeItem("jwt_token");
        location.reload();
    },


    is_Longin: {
        getJwtToken: () => {
            let config = {
                headers: {
                    'accept': 'application/json',
                }
            }

            let currentToken = localStorage.getItem("jwt_token");
            if (currentToken) {
                return true
            } else {
                return false;
            }

        }
    }


}

const getJwtTocken = () => {

}

// let getProducts = async ()=>{
//     let products = await Api.getAll('products');
//     return products;
// }
//
// console.log('api_p', getProducts());

export default Api;