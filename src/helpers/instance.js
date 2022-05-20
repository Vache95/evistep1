import axios from "axios";
import TokenService from "./TokenService";

const instance = axios.create({
  baseURL: "https://azapp-playground-demo-api.azurewebsites.net/api",
  headers: {
    "Content-Type": "application/json",
  },
});


instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    if (originalConfig.url !== "/auth/signin" && err.response) {
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await instance.post("/Accounts/RefreshToken", {
            token: TokenService.getLocalAccessToken(),
            refreshToken: TokenService.getLocalRefreshToken(),
          });
          const { token,refreshToken } = rs.data;
          TokenService.setLocalAccessToken(token);
          TokenService.setLocalRefreshToken(refreshToken);
          return instance(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);
export default instance;