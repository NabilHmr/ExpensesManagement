<template>
  <div>
    <h2>Expense History</h2>
    <table class="expense-table">
      <thead>
      <tr>
        <th>Description</th>
        <th>Amount</th>
        <th>Date</th>
        <th>Category</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="expense in paginatedExpenses" :key="expense.id">
        <td>{{ expense.description }}</td>
        <td>{{ expense.amount }}</td>
        <td>{{ expense.date }}</td>
        <td>{{ getCategoryName(expense.categoryId) }}</td>
      </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">Previous</button>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      expenses: [],
      categories: [],
      currentPage: 1,
      itemsPerPage: 10
    };
  },
  computed: {
    paginatedExpenses() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.expenses.slice(startIndex, endIndex);
    },
    totalPages() {
      return Math.ceil(this.expenses.length / this.itemsPerPage);
    }
  },
  created() {
    this.fetchExpenses();
    // this.fetchCategories();
  },
  methods: {
    fetchExpenses() {
      axios.get('/expenses')
          .then(response => {
            this.expenses = response.data;
          })
          .catch(error => {
            console.error('Error fetching expenses:', error);
          });
    },
    fetchCategories() {
      axios.get('/categories')
          .then(response => {
            this.categories = response.data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
    },
    getCategoryName(categoryId) {
      const category = this.categories.find(cat => cat.id === categoryId);
      return category ? category.name : 'Unknown';
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    }
  }
}
</script>

<style scoped>
.expense-table {
  width: 100%;
  border-collapse: collapse;
}

.expense-table th, .expense-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.expense-table th {
  background-color: #f2f2f2;
}

.pagination {
  margin-top: 10px;
  text-align: center;
}

.pagination button {
  margin: 0 5px;
}
</style>
