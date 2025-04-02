import { defineStore } from 'pinia'
import type { FormData } from '../types/auth';


export const useAuthStore = defineStore('auth', {
  state: () => ({
    userData: {
      login: 'test@gmail.com',
      password: 'testtest',
    },
  }),
  actions: {
    login(formData: FormData): Promise<unknown> {
      return new Promise((resolve, reject) => {
        if (formData.login === this.userData.login 
          && formData.password === this.userData.password ) {
            resolve(true)
          } else {
            reject()
          }
      })
    },
  },
})