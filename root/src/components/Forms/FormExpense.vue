<template>
    <div class="form-container">
      <h2>Create Expense</h2>
      <form @submit.prevent="submitExpense" class="expense-form">
        <div class="form-group">
          <label for="description">Description:</label>
          <input type="text" id="description" v-model.trim="expense.description" required>
        </div>
        <div class="form-group">
          <label for="amount">Amount:</label>
          <input type="number" id="amount" v-model.number="expense.amount" required>
        </div>
        <div class="form-group">
          <label for="date">Date:</label>
          <input type="date" id="date" v-model="expense.date" required>
        </div>
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" v-model="expense.categoryId" required>
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>
        <div class="form-group">
          <button type="submit" class="btn-submit">Submit</button>
        </div>
      </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      expense: {
        description: '',
        amount: null,
        date: null,
        categoryId: null
      },
      categories: []
    };
  },
  created() {
    this.fetchCategories();
  },
  methods: {
    submitExpense() {
      axios.post('/expenses', this.expense)
          .then(response => {
            console.log('Expense submitted:', response.data);
            // Réinitialisez le formulaire après la soumission réussie
            this.expense = {
              description: '',
              amount: null,
              date: null,
              categoryId: null
            };
          })
          .catch(error => {
            console.error('Error submitting expense:', error);
          });
    },
    fetchCategories() {
      axios.get('/categories')
          .then(response => {
            console.log(response);
            this.categories = response.data;
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
    }
  }
}
</script>


<style scoped>
.dashboard {
  display: flex;
}

.dashboard-title {
  flex: 1;
  text-align: center;
}

.form-container {
  flex: 1;
  padding: 20px;
}

.expense-form {
  max-width: 400px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
input[type="date"],
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: white;
}

.btn-submit {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
