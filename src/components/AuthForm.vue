<template>
    <div class="form-wrapper">
        <form class="form">
            <h1 class="heading">Welcome back!</h1>
            <p class="subheading">Lorem ipsum dolor sit amet, consectetur</p>
            <InputField 
                v-model="formData.login" 
                class="email-input" 
                :error-message="loginErrorMessage"
            /> 
            <InputField 
                v-model="formData.password" 
                is-password 
                class="password-input"
                :error-message="passwordErrorMessage"
            /> 
            <a href="" class="forgot-block">
                <p class="forgot-password" >Forgot password?</p>
            </a>
            <LoginButton @click="submit" class="login-button"/>
        </form>
        <Divider class="divider-block"/>
        <div class="social-buttons-block">
            <SocialButton icon="social-google" label="Google" />
            <SocialButton icon="social-yandex" label="Yandex" />
        </div>
        <p class="signup-block">
            Don’t you have an account?
            <a>Sign Up</a>
        </p>
    </div>

</template>

<script setup lang="ts">
import Divider from './Divider.vue';
import LoginButton from './buttons/LoginButton.vue';
import SocialButton from './buttons/SocialButton.vue';
import InputField from './inputs/InputField.vue'
import type { FormData } from '../types/auth';
import { reactive, computed, toRaw } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useToast } from 'vue-toastification'
import { useAuthValidation } from '../composables/useAuthValidation'

const { login } = useAuthStore()
const { isEmailValid, isPasswordVallid } = useAuthValidation()
const toast = useToast()

const formData = reactive<FormData>({
    login: '',
    password: ''
})

const loginErrorMessage = computed<string>(() => {
    if (!formData.login) {
        return ''
    }
    return !isEmailValid(formData.login) ? 'Email is not vallid' : ''
})

const passwordErrorMessage = computed<string>(() => {
    if (!formData.password) {
        return ''
    }
    return !isPasswordVallid(formData.password) ? 'Password length must be at least 8 characters' : ''
})

const isDatafilled = (): boolean => {
    return !!formData.login && !!formData.password
}

const isFormValid = (): boolean => {
    return !loginErrorMessage.value && !passwordErrorMessage.value
}

const submit = () => {
    if (!isDatafilled()) {
        toast.error('Not all fields are filled')
        return
    }
    if (!isFormValid()) {
        toast.error('Fields filled with errors')
        return
    }
    login(toRaw(formData))
        .then(() => {
            toast.success('Authorization was successful!')
        })
        .catch(() => {
            toast.error('User with such login and password not found')
        })
}
</script>

<style scope>
.form-wrapper{
    max-width: 416px;
    width: calc(100% - 32px);
}

.heading {
    font-family: Inter;
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
    letter-spacing: -1%;
    color: #101213;
}

.subheading {
    margin-top: 20px;
    font-family: Inter;
    font-weight: 400;
    font-size: 18px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #969899;
}

.email-input {
    margin-top: 40px;
}

.password-input {
    margin-top: 16px;
}

.forgot-block {
    margin-top: 16px;
    display: block;
}
.forgot-password {
    font-family: Inter;
    font-weight: 500;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #157AFE;
    text-align: end;
}

.divider-block {
    margin-top: 42px;
}

.signup-block {
    margin-top: 44px;
    text-align: center;
    color: #969899;
    font-family: Inter;
    font-weight: 400;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: -3%;
}
.signup-block a {
    font-weight: 500;
    color: #157AFE;
    white-space: nowrap;
}

.login-button {
    margin-top: 24px;
}

.social-buttons-block {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 17px;
    margin-top: 41px;
}

@media (max-width: 500px) {
    .social-buttons-block {
        grid-template-columns: 1fr;
    }
}
</style>