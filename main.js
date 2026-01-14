const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            description: 'Warm socks for your feet.',
            image: './assets/images/socks_blue.jpg',
            url: 'https://www.vuemastery.com/courses/intro-to-vue-3/class-and-style-binding-vue3',
            inStock: false,
            inventory: 8,
            onSale: false,
            details: ['50% cotton', '30% wool', '20% polyester'],
            sizes: ['S', 'M', 'L', 'XL'],
            variants: [
                { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ],
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
})
