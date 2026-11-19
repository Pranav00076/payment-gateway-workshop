require('dotenv').config();
const express = require('express');
const Razorpay = require('razorpay');

const app = express();
app.use(express.json());

const {RAZORPAY_KEY, RAZORPAY_SECRET} = process.env;

const instance = new Razorpay({
  key_id: RAZORPAY_KEY,
  key_secret: RAZORPAY_SECRET,
});


