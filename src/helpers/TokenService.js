class TokenService {
    getLocalRefreshToken() {
        return localStorage.getItem("refreshToken");
    }
    getLocalAccessToken() {
        return localStorage.getItem("token");
    }
    removeLocalRefreshToken() {
        return localStorage.removeItem("refreshToken");
    }
    removeLocalAccessToken() {
        return localStorage.removeItem("token");
    }
    setLocalRefreshToken(token) {
        return localStorage.setItem("refreshToken",token);
    }
    setLocalAccessToken(token) {
        return localStorage.setItem("token",token);
    }
}
export default new TokenService();