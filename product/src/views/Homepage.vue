<template>
  <div>
    <FilterForm />
    <ProductList />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';
import FilterForm from '../components/FilterForm.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'HomepageView',
  components: { FilterForm, ProductList },
  setup() {
    const productStore = useProductStore();

    // Загружаем продукты при монтировании компонента
    onMounted(() => {
      productStore.loadProducts();
    });

    return {};
  },
};
</script>
