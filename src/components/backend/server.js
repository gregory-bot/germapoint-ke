const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Function to get access token
async function getAccessToken() {
  const response = await axios.get(
    "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.CONSUMER_KEY + ":" + process.env.CONSUMER_SECRET
          ).toString("base64"),
      },
    }
  );
  return response.data.access_token;
}

// Route to initiate payment
app.post("/api/payment", async (req, res) => {
  const { phoneNumber, amount } = req.body;
  const accessToken = await getAccessToken();
  const timestamp = new Date()
    .toISOString()
    .replace(/[-T:\.Z]/g, "")
    .slice(0, 14);
  const password = Buffer.from(
    process.env.SHORTCODE + process.env.PASSKEY + timestamp
  ).toString("base64");

  try {
    const response = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
      {
        BusinessShortCode: process.env.SHORTCODE,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phoneNumber,
        PartyB: process.env.SHORTCODE,
        PhoneNumber: phoneNumber,
        CallBackURL: process.env.CALLBACK_URL,
        AccountReference: "GermanPoint",
        TransactionDesc: "Payment for Order",
      },
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    res.json({ success: true, data: response.data });
  } catch (error) {
    console.error("Payment initiation failed", error);
    res
      .status(500)
      .json({ success: false, error: "Payment initiation failed" });
  }
});

// Route to handle callback from M-Pesa
app.post("/mpesa/callback", (req, res) => {
  // Log the response received from M-Pesa for verification
  console.log("Callback data:", req.body);

  // Extract information from the callback
  const { Body } = req.body;

  if (Body.stkCallback.ResultCode === 0) {
    // Payment is successful; process the details here (e.g., update database)
    const amount = Body.stkCallback.CallbackMetadata.Item.find(
      (item) => item.Name === "Amount"
    ).Value;
    const transactionId = Body.stkCallback.CallbackMetadata.Item.find(
      (item) => item.Name === "MpesaReceiptNumber"
    ).Value;
    const phoneNumber = Body.stkCallback.CallbackMetadata.Item.find(
      (item) => item.Name === "PhoneNumber"
    ).Value;

    console.log(
      `Transaction successful! Amount: ${amount}, Transaction ID: ${transactionId}, Phone: ${phoneNumber}`
    );

    // Update your database or application logic with the payment details here
  } else {
    // Handle a failed transaction (ResultCode not 0)
    console.log("Transaction failed:", Body.stkCallback.ResultDesc);
  }

  // Respond to M-Pesa with a 200 status to confirm receipt
  res.status(200).json({ message: "Callback received" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
