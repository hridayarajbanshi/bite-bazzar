import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import User from "@/models/user";
import Order from "@/models/order";
import { requireAdmin } from "@/utils/adminAuth";
export async function GET(req: Request) {
  // 1) enforce admin
  const auth = await requireAdmin();
  if (!auth.ok) {
    return auth.response;}

  // 2) connect & fetch stats
  await connectToDB();
  const totalProducts = await Product.countDocuments();
  const totalUsers = await User.countDocuments();
  const totalOrders = await (Order ? Order.countDocuments() : Promise.resolve(0));
  // sample revenue calculation (if you track orders totals)
  const totalRevenue = await (Order ? Order.aggregate([{ $group: { _id: null, total: { $sum: "$total" } } }]) : Promise.resolve([]));
  const revenue = totalRevenue[0]?.total || 0;

  return NextResponse.json({
    totalProducts,
    totalUsers,
    totalOrders,
    totalRevenue: revenue,
  });
}
