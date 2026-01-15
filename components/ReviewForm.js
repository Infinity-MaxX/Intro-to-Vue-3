app.component('review-form', {
    template:
    /*html*/
    `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review</h3>
        <label for="name">Name:</label>
        <input id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>

        <label for="rating">Rating</label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <!-- Code Challenge -->
        <label for="recommend">
            Would you recommend this product?
        </label>
        <select id="recommend" v-model="recommend">
            <option>Yes</option>
            <option>No</option>
        </select>
        <!-- Code Challenge -->

        <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null,
            // Code Challenge
            recommend: null
            // Code Challenge
        }
    },
    methods: {
        onSubmit() {
            if (this.name === '' ||
                this.review === '' ||
                this.rating === null ||
                this.recommend === null) {
                    alert('Review is incomplete. Please fill out every field.')
                    return
                }

            let productReview = {
                name: this.name,
                review: this.review,
                rating: this.rating,
                // Code Challenge
                recommend: this.recommend
                // Code Challenge
            }
            this.$emit('review-submitted', productReview)

            this.name = ''
            this.review = ''
            this.rating = null,
            // Code Challenge
            this.recommend = null
            // Code Challenge
        }
    }
})