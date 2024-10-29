<!-- src/components/ProductCard.vue -->
<template>
  <div class="product-card">
    <img :src="product.thumbnail" alt="Product Image" />
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <p>Цена: {{ product.price }} $</p>
    <p>Рейтинг: {{ product.rating }}</p>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style>
.product-card {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 8px;
  text-align: center;
}
</style>
