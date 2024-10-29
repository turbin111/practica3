<template>
  <div>
    <input v-model="searchQuery" placeholder="Поиск по имени" />
    <select v-model="selectedCategory" @change="filterProducts">
      <option value="">Все категории</option>
      <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
    </select>
    <input type="range" min="0" max="2000" v-model="maxPrice" step="50" @input="filterProducts" />
    <label>Максимальная цена: {{ maxPrice }}</label>
    <input type="range" min="1" max="5" v-model="rating" step="0.1" @input="filterProducts" />
    <label>Минимальный рейтинг: {{ rating }}</label>

    <!-- Убираем кнопку поиска -->
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import { ref } from 'vue';

export default {
  setup() {
    const productStore = useProductStore();
    const selectedCategory = ref(productStore.selectedCategory);
    const searchQuery = ref(productStore.searchQuery);
    const maxPrice = ref(productStore.maxPrice);
    const rating = ref(productStore.rating);

    // Функция для применения фильтров
    const filterProducts = () => {
      productStore.selectedCategory = selectedCategory.value;
      productStore.searchQuery = searchQuery.value;
      productStore.maxPrice = maxPrice.value;
      productStore.rating = rating.value;
      productStore.filterProducts();
    };

    return {
      categories: productStore.categories,
      selectedCategory,
      searchQuery,
      maxPrice,
      rating,
      filterProducts,
    };
  },
};
</script>
