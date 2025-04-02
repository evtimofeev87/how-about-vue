<template>
    <div>
        <div @click="inputRef.focus()" class="field" :class="{error: !!errorMessage}">
            <RawIcon class="icon" :name="isPassword ? 'password' : 'email'" color="#818E9C"/>
            <input
                v-model="model"
                ref="inputRef"
                class="input-el" 
                :type="isPassword && hidePassword ? 'password' : 'text'"
                :placeholder="isPassword ? 'At least 8 characters' : 'you@example.com'"
            >
            <RawIcon 
                v-if="isPassword" 
                @click="hidePassword = !hidePassword"
                class="icon eye" 
                :name="hidePassword ? 'eye-hide' : 'eye-show'" 
                color="#818E9C"
            />
        </div>
        <p class="error-text" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
</template>

<script setup lang="ts">
import RawIcon from '../RawIcon.vue';
import { ref } from 'vue';

interface Props {
    isPassword?: boolean
    errorMessage?: string
}

withDefaults(defineProps<Props>(), {
    isPassword: false,
    errorMessage: ''
})

const model = defineModel()
const hidePassword = ref(true)
const inputRef = ref()
</script>

<style scoped>
.field {
    padding: 16px;
    display: flex;
    align-items: center;
    background-color: #F5F7F9;
    border-radius: 10px;
    gap: 19px;
}

.icon {
    height: 24px;
    width: 24px;
}

.input-el {
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    color: #333;
    flex: 1 1 auto;
}

.input-el::placeholder {
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #969899;
}

.eye {
    margin-left: auto;
    cursor: pointer;
    user-select: none;
}

.error {
    background-color: #FEE2E2;
}

.error-text{
    margin-top: 4px;
    font-size: 14px;
    color: #e53935;
}
</style>