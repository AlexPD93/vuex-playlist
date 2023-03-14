<script>
export default {
  //Create a computed property to get the stored data
  computed: {
    products() {
      //How to retrieve the data in the store
      return this.$store.state.products;
    },
    items() {
      return this.$store.state.items;
    },
  },
};
</script>

<template>
  <div id="product-list-one">
    <h2>Product List One</h2>
    <ul>
      <li v-for="product in products">
        <span class="name">{{ product.name }}</span>
        <span class="price"> {{ product.price }}</span>
      </li>
    </ul>
    <ul>
      <li v-for="item in items">
        <span class="name">{{ item.name }}</span>
        <span class="price"> {{ item.price }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
