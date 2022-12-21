import axios from "axios";

const apiURLs = {
  development: "http://localhost:8080",
  production: "https://reader-gov-back.cyclic.app"
};

const api = axios.create({ 
  baseURL: apiURLs[process.env.NODE_ENV] || apiURLs["development"],
  //onUploadProgress: progressEvent => console.log(progressEvent.loaded) //callbak mostra o progresso do upload
});

export default api;