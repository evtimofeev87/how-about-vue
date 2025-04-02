<template>
    <section class="auth-section">
        <AuthForm class="auth-form"/>
        <p class="copyright">© 2022 ALL RIGHTS RESERVED</p>
    </section>
</template>

<script setup lang="ts">
import AuthForm from './AuthForm.vue';

</script>

<style>
.auth-section {
    height: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding-inline: 16px;
    position: relative;
}

.copyright {
    margin-bottom: 48px;
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #969899
}

.auth-form {
    /* margin-top: 194px; */
}
</style>