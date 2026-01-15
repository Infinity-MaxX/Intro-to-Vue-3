app.component('product-display', {
  props: {
      premium: {
          type: Array,
          required: true
      }
  },
  template:
    /*html*/
    `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
})