app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img 
                    :src="image" 
                    :alt="product.name"
                    :class="{ 'out-of-stock-img': !inStock }">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock > 10">In Stock</p>
                <p v-else-if="inStock <= 10 && inStock > 0">
                    Almost sold out!
                </p>
                <p v-else>Out of Stock</p>
                <p v-show="onSale">{{ title + ' is on sale' }}</p>
                <p>Shipping: {{ shipping }}</p>
                <product-details :details="product.details"></product-details>
                <div 
                    class="color-circle"
                    v-for="(variant, index) in product.variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)"
                    :style="{ backgroundColor: variant.color }">
                </div>
                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }"
                    v-on:click="addToCart"
                    :disabled="!inStock">
                    Add to Cart
                </button>
                <button 
                    class="button" 
                    v-on:click="removeFromCart"
                    :disabled="!cart">
                    Remove from Cart
                </button>
            </div>
        </div>
    </div>`,
    data() {
        return {
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
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            }

            return 2.99;
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
    }
});