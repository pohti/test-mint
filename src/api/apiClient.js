import axios from "axios";

// const apiKey = process.env.REACT_APP_APIKEY;

export const axiosClient = axios.create({
  baseURL: `https://t55gd7qb20.execute-api.us-east-1.amazonaws.com/UAT`,
  headers: {
    "Content-Type": "application/json",
    // "x-api-key": apiKey,
  },
  // withCredentials: false
});
