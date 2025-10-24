import mongoose, { Schema } from 'mongoose';
const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    product: { type: Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    qty: Number,
  }],
  total: Number,
  status: { type: String, enum: ['pending','paid','shipped','cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  paymentIntentId: String,
});
export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
