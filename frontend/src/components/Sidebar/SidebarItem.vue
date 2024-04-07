<script setup>
const { item } = defineProps(["item"]);
</script>

<template>
    <li>
        <template v-if="item.children && item.children.length">
            <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary
                    class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                    <div>
                        <unicon v-if="item.icon !== undefined" :name="item.icon" class="w-5 h-5 inline-block mr-2" />
                        <span class="text-sm font-medium">{{ item.label }}</span>
                    </div>
                    <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </span>
                </summary>
                <!-- Affiche les sous-items -->
                <ul class="mt-2 space-y-1 px-4">
                    <SidebarItem v-for="(child, index) in item.children" :key="index" :item="child" />
                </ul>
            </details>
        </template>
        <template v-else>
            <!-- Si l'élément n'a pas d'enfants -->
            <router-link :to="item.href"
                class="flex items-center rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-200"
                exact-active-class="text-gray-700 bg-gray-100">
                <unicon v-if="item.icon" :name="item.icon" class="w-5 h-5 inline-block mr-2" />
                {{ item.label }}
            </router-link>
        </template>
    </li>
</template>
