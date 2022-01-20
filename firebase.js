// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
const api_key = require('./auth.json')

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: api_key.apiKey,

  authDomain: "acc-website-42c67.firebaseapp.com",

  projectId: "acc-website-42c67",

  storageBucket: "acc-website-42c67.appspot.com",

  messagingSenderId: "740469023395",

  appId: "1:740469023395:web:3037dace698967bbecd516"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);