app.component('product-display', {
  props: {
      premium: {
          type: Array,
          required: true
      }
  },
  template:
    /*html*/
    `<li v-for="detail in details">{{ detail }}</li>`
})