<template>
    <section class="logo-section" >
        <img class="logo" src="/vue.svg" alt=""  />
        <p class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    </section>
</template>

<style scoped>
.logo-section {
    height: 100%;
    flex-grow: 1;
    background-color: #F5F7F9;
    display: flex;
    flex-direction: column;
    padding-inline: 83px;
}

.logo {
    margin-top: 200px;
    width: 72px;
    height: 62px;
    text-align: start;
}

.text {
    max-width: 382px;
    margin-top: auto;
    margin-bottom: 48px;
    font-family: Inter;
    font-weight: 300;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #969899;
}
</style>