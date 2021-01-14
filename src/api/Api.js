let domen = 'https://fakestoreapi.com/';
const Api = {

    getAll: (items = 'products') => {
        fetch(`${domen}${items}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    getSingle: (items = 'products', id = '1') => {
        fetch(`${domen}${items}/${id}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    getLimit: (items = 'products', limit = '5') => {
        fetch(`${domen}${items}?limit=${limit}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    getSort: (items = 'prducts', sort = 'desc') => {
        fetch(`${domen}${items}?sort=${sort}`)
            .then(res => res.json())
            .then(json => console.log(json))
    },

    addNew: (items = 'products', product = {}) => {
        fetch(`${domen}${items}`, {
            method: "POST",
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    },

    updateItem: (items = 'products', id, product = {}) => {
        fetch(`${domen}${items}/${id}`, {
            method: "PUT",
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    },


    deleteItem: (items = 'products', id) => {
        fetch(`${domen}${items}/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }

}

export default Api;