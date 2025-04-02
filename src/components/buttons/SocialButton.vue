<template>
    <button class="button">
        <RawIcon class="icon" :name="icon" color="#818E9C"/>
        <span>{{ label }}</span>
    </button>
</template>

<script setup lang="ts">
import RawIcon from '../RawIcon.vue';

defineProps<{
    icon: string
    label: string
}>()
</script>

<style scoped>
.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    border: 2px solid #F5F5F5;
    border-radius: 10px;
    background-color: white;
}

.icon {
    height: 24px;
    width: 24px;
}
</style>