const app = Vue.createApp({
    data() {
        return {
            cart: 0,
            brand: 'Vue Mastery',
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
            },
            selectedVariant: 0
        }
    },
    methods: {
        addToCart() {
            this.cart++;
        },
        updateVariant(index) {
            this.selectedVariant = index;
        },
        removeFromCart() {
            if (this.cart > 0) {
                this.cart--;
            }
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product.name;
        },
        image() {
            return this.product.variants[this.selectedVariant].image;
        },
        inStock() {
            return this.product.inventory;
        },
        onSale() {
            return this.product.onSale;
        }
    }
});