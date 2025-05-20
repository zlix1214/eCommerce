import express from "express";
import {
  placeOrders,
  placeOrdersStripe,
  placeOrdersRazorpay,
  allOrders,
  userOrders,
  updateStatus,
} from "../controllers/orderController.js";

import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//Admin Feature
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Feature
orderRouter.post("/place", authUser, placeOrders);
orderRouter.post("/place/stripe", authUser, placeOrdersStripe);
orderRouter.post("/place/razorpay", authUser, placeOrdersRazorpay);

//User Feature
orderRouter.post("/userorders", authUser, userOrders);

export default orderRouter;
