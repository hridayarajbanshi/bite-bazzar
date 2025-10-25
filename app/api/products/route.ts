import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import { getServerSession } from "next-auth/next";
import 
export async function GET(req: Request) {
  await connectToDB();
  const q = new URL(req.url).searchParams;
  const category = q.get('category');
  const filter: any = {};
  if (category) filter.category = category;
  const products = await Product.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  // protect admin
  const session = await getServerSession(authOptions as any);
  if (!session || (session as any).user.role !== 'admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const { name, slug, description, price, images, category, inventory } = body;
  await connectToDB();
  const existing = await Product.findOne({ slug });
  if (existing) return NextResponse.json({ error: "Slug exists" }, { status: 400 });
  const product = new Product({ name, slug, description, price, images, category, inventory });
  await product.save();
  return NextResponse.json(product, { status: 201 });
}
