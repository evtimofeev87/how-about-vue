<template>
    <div class="page">
        <LogoSection class="logo-section"/>
        <AuthSection/>
    </div>
</template>

<script setup lang="ts">
import LogoSection from '../components/LogoSection.vue';
import AuthSection from '../components/AuthSection.vue';

</script>

<style scoped>
.page {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}


@media (max-width: 900px) {
  .page {
    grid-template-columns: 1fr; /* Только одна колонка */
  }

  .logo-section {
    display: none; /* Скрываем первую */
  }
}
</style>