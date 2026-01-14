const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'Warm socks for your feet.',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/attribute-binding-vue3',
            inStock: true,
            inventory: 8,
            onSale: false
        }
    }
})
