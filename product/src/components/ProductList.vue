<template>
  <div>
    <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import ProductCard from './ProductCard.vue';
import { computed } from 'vue';

export default {
  components: { ProductCard },
  setup() {
    const productStore = useProductStore();
    productStore.loadProducts();

    // Используйте `filteredProducts` из store
    return {
      filteredProducts: computed(() => productStore.filteredProducts),
    };
  },
};
</script>
