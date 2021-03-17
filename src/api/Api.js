import axios from "axios";

let domen = 'http://127.0.0.1:8000/';

let currentUrl = window.location.href;

currentUrl = currentUrl.split('/')

let currentDomen = currentUrl[2];

if (currentDomen !== 'http://localhost:3000/') {
    domen = 'https://evening-fjord-08596.herokuapp.com/'
}

console.log('curretUrl', currentDomen);
console.log('remote api domen', currentDomen);

let config = {
    headers: {
        'accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}

const Api = {
    getAll: (items = 'products') => {
        return fetch(`${domen}api/petshop/${items}`, config)
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
        return fetch(`${domen}api/petshop/${items}/${id}`)
            .then(res => res.json())
            .then(json => {
                return json
            });
    },

    getLimit: (items = 'products', limit = '5') => {
        return fetch(`${domen}api/petshop/${items}?limit=${limit}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    getSort: (items = 'prducts', sort = 'desc') => {
        return fetch(`${domen}api/petshop/${items}?sort=${sort}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    addNew: (items = 'products', product = {}) => {
        return fetch(`${domen}api/petshop/${items}/add`, {
            method: "POST",
            body: JSON.stringify(product)
        }).then(res => console.log('res', res))

    },

    updateItem: (items = 'product', id, product = {}) => {
        alert("Put");
        return axios.put(`${domen}api/petshop/${items}/update/${id}`,
            {
                product
            }
        ).then(res => console.log("Updated", res))
    },


    deleteItem: (items = 'products', id) => {
        return fetch(`${domen}api/petshop/${items}/delete/${id}`, {
            method: "DELETE"
        }).then(json => console.log("delete json", json))
    },

    registerUser: (params) => {
        let config = {
            headers: {
                'accept': 'application/json',
            }
        }
        return axios.post(`${domen}register`, params, config)
            .then(response => {
                console.log('login success', response.data)

            }).then(
                () =>{
                    console.log('login after register')
                    Api.loginUser.getJwtToken(params)
                    // setTimeout(()=>{
                    //     location.reload()
                    // },2000);
                }
            ).catch(error => {
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

            return axios.post(`${domen}authentication_token `, params, config)
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
        //location.reload();
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