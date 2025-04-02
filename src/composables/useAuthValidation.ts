export const useAuthValidation = () => {
    
    const isEmailValid = (email: string): boolean => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    const isPasswordVallid = (password: string): Boolean => {
        return password.length >= 8
    }

    return {
        isEmailValid,
        isPasswordVallid
    }
}