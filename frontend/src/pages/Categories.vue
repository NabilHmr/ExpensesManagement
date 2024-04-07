<template>
    <div>
        <h1>Categories</h1>
        <EasyDataTable :headers="headers" :items="categories">
            <template #item-type="item">
                <span v-if="item.type === 'CREDIT'" class="badge badge-success">Income</span>
                <span v-else class="badge badge-danger">Expense</span>
            </template>
            <template #item-actions="item">
                <div class="flex items-center space-x-2">
                    <router-link :to="`/categories/${item.id}`" class="btn btn-sm btn-primary">
                        <unicon name="edit" class="w-4 h-4 inline-block" fill="#3b82f6" />
                    </router-link>
                    <button class="btn btn-sm btn-danger" @click="deleteCategory(item.id)">
                        <unicon name="trash-alt" class="w-4 h-4 inline-block" fill="#ef4444" />
                    </button>
                </div>
            </template>
        </EasyDataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const categories = ref([])

const headers = [
    { text: "NAME", value: "name" },
    { text: "TYPE", value: "type" },
    { text: "ACTIONS", value: "actions", sortable: false },
]

function fetchCategories() {
    fetch("http://localhost:3100/categories")
        .then(response => response.json())
        .then(data => {
            categories.value = data
        })
}

function deleteCategory(id) {
    fetch(`http://localhost:3100/categories/${id}`, {
        method: "DELETE"
    }).then(() => fetchCategories())
}

onMounted(() => {
    fetchCategories()
})
</script>

<style></style>