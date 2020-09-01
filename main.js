const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            product: {
                name: 'Socks',
                description: 'Is just comfortable socks with a Vue logo in it',
                image: './assets/images/socks_green.jpg',
                inventory: 100,
                onSale: true,
                details: [
                    '50% cotton',
                    '30% wool',
                    '20% polyester'
                ],
                variants: [
                    { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
                    { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' }
                ]
            }
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        updateImage(variantImage) {
            this.product.image = variantImage;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        }
    }
});