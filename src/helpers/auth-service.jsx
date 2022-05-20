import AxiosInstance from './instance';

export function loginWithCode(body) {
   return AxiosInstance.post(`/Accounts/LoginWithCode`, body)
}

export function loginGeneratePassword(body) {
    return AxiosInstance.post(`/Accounts/GeneratePassword`, body)
}

export function currentAppUser() {
    return AxiosInstance.get(`/Accounts/GetCurrentAppUser`)
}

export function logout() {
    return AxiosInstance.post(`/Accounts/Logout`)
}