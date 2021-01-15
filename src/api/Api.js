let domen = 'https://fakestoreapi.com/';
const Api = {

    getAll: (items = 'products') => {
        return fetch(`${domen}${items}`)
            .then(res => res.json())
            .then(json => {
                return json
            }).then()
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
        return fetch(`${domen}${items}`, {
            method: "POST",
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    },

    updateItem: (items = 'products', id, product = {}) => {
        return fetch(`${domen}${items}/${id}`, {
            method: "PUT",
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    },


    deleteItem: (items = 'products', id) => {
        return fetch(`${domen}${items}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

}

export default Api;