<script setup>
import SidebarItem from "./SidebarItem.vue";

const items = [
    {
        label: "Dashboard",
        href: "/dashboard",
        icon: "dashboard"
    },
    {
        label: "Transactions",
        href: "/transactions",
        icon: "transaction"
    },
    {
        label: "Categories",
        href: "/categories",
        icon: "label-alt",
    },
    {
        label: "Reports",
        href: "/reports",
        icon: "chart-pie",
        children: [
            { label: "Sales", href: "/reports/sales" },
            { label: "Expenses", href: "/reports/expenses" },
        ]
    },
    {
        label: "Settings",
        href: "/settings",
        icon: "cog",
        children: [
            { label: "Profile", href: "/settings/profile" },
            { label: "Security", href: "/settings/security" },
        ]
    },
    {
        label: "Help and support",
        href: "/help",
        icon: "life-ring",
        children: [
            { label: "Frequently Asked Questions", href: "/faq" },
            { label: "Contact", href: "/contact" },
        ]
    },
];
</script>

<template>
    <div class="flex h-screen flex-col justify-between border-e bg-white min-w-60">
        <div class="px-4 py-6">
            <span class="grid h-10 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
                Logo
            </span>

            <ul class="mt-6 space-y-1">
                <li>
                    <SidebarItem v-for="(item, index) in items" :key="index" :item="item" />
                </li>
            </ul>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
            <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50 break-all">
                <img alt=""
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    class="size-10 rounded-full object-cover" />

                <div>
                    <p class="text-xs">
                        <strong class="block font-medium">Eric Frusciante</strong>

                        <span> eric@frusciante.com </span>
                    </p>
                </div>
            </a>
        </div>
    </div>
</template>
