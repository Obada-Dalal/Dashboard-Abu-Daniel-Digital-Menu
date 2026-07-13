import axios from "axios";

const api = axios.create({
  baseURL: "https://abu-daniel-server-menu.onrender.com/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api", // ✨ اللوكل هوست
//   headers: {
//     "Content-Type": "application/json"
//   }
// });

// export default api;
