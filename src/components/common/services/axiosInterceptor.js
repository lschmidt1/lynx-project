import axios from "axios";

// const TIMEOUT = 3000;
const setupAxiosInterceptors = (onUnauthenticated) => {
  const onRequestSuccess = (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // config.timeout = TIMEOUT;
    // config.url = process.env.REACT_APP_BACKEND_URL;
    return config;
  };

  const onResponseSuccess = (response) => response;

  const onResponseError = (err) => {
    const status = err.status || err.response.status;
    if (status === 403 || status === 401) {
      setTimeout(() => {
        console.log(`AXIOS: error code ${status} redirect to login`)
        window.location = "/login";
      }, 1000);
      
      onUnauthenticated();
    }
    return Promise.reject(err);
  };

  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;
