import { defineStore } from 'pinia';
import { fetchProducts } from '../services/productService';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filteredProducts: [],
    categories: [],
    maxPrice: 2000, // Обновлено на максимальную цену
    selectedCategory: '',
    searchQuery: '',
    rating: 1, // Установлен минимальный рейтинг
  }),
  actions: {
    async loadProducts() {
      const products = await fetchProducts();
      this.products = products;
      this.filteredProducts = products;

      // Уникальные категории
      this.categories = [...new Set(products.map(product => product.category))];
    },
    filterProducts() {
      this.filteredProducts = this.products.filter(product => {
        const matchesCategory = this.selectedCategory ? product.category === this.selectedCategory : true;
        const matchesSearch = product.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesPrice = product.price <= this.maxPrice;
        const matchesRating = product.rating >= this.rating;
        return matchesCategory && matchesSearch && matchesPrice && matchesRating;
      });
    },
  },
});
