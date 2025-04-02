<template>
    <div class="divider">
        <div class="border"></div>
        <span class="or">or</span>
        <div class="border"></div>
    </div>
</template>

<style scoped>
.divider {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 16px;
}

.border{
    flex-grow: 1;
    border: 1px solid #F5F5F5;
}

.or {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #969899;
}
</style>