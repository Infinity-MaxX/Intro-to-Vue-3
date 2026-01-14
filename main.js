const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            description: 'Warm socks for your feet.',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/conditional-rendering-vue3',
            inStock: true,
            inventory: 8,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, colour: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, colour: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
        }
    }
})
