import axios from "axios";
import { fetchAuthSession } from 'aws-amplify/auth';

// const apiKey = process.env.REACT_APP_APIKEY;
const accessToken = localStorage.getItem('accessToken'); 
console.log("This is access token", accessToken);   

export const axiosClient = axios.create({
  baseURL: `https://t55gd7qb20.execute-api.us-east-1.amazonaws.com/UAT`,
  headers: {
    "Content-Type": "application/json",
    "Authorization": accessToken // Replace "authtoken" with the actual auth token
  },
  // withCredentials: false
});
