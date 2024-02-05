const Razorpay = require('razorpay');

apiKey="NTe6jIVfelgMYO"
apiSecret="rzp_test_khbwvcAc5QYzRl"

const razorpay = new Razorpay({
  key_id: apiKey,
  key_secret: apiSecret,
});

module.exports = razorpay;