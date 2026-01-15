const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        // Code Challenge
            // splice: 
                // first parameter is required; it
                // dictates at what index should an
                // item be removed. 
                // second parameter is optional; it
                // dictates the count, i.e. how many,
                // items should be removed. 0 is used
                // when simply wants to add item.
                // third and above parameters are
                // optional; here you can write which
                // items should be added to the array
        deleteItem(id) {
            const index = this.cart.indexOf(id)
            // remove from the back of the array
            if (index > -1) {
                this.cart.splice(index, 1)
            }
        },
        // Code Challenge
    }
})
