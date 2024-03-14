<template>
    <div>
        <canvas ref="chart"></canvas>
    </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const ctx = this.$refs.chart.getContext('2d');

            // Mock data
            const expenses = [
                { date: '2022-01-01', name: 'Expense 1', amount: 100, description: 'Description 1' },
                { date: '2022-01-02', name: 'Expense 2', amount: 200, description: 'Description 2' },
                { date: '2022-01-03', name: 'Expense 3', amount: 150, description: 'Description 3' },
                // Add more expenses here...
            ];

            // Extracting data from expenses
            const dates = expenses.map(expense => expense.date);
            const amounts = expenses.map(expense => expense.amount);

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            label: 'Expense Amount',
                            data: amounts,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });
        },
    },
};
</script>

<style>
/* Add any custom styles for the chart here */
</style>