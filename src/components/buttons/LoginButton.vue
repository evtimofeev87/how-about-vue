<template>
    <button type="button" class="login-button">Login</button>
</template>

<style scoped>
.login-button {
    width: 100%;
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0%;
    text-align: center;
    padding-block: 18px;
    color: white;
    background-color: #157AFE;
}

.login-button {
  transition: transform 0.1s ease;
}

.login-button:active {
  transform: scale(0.95);
}

.login-button.clicked {
  animation: pop 0.3s ease;
}

@keyframes pop {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}
</style>