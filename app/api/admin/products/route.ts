import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import { requireAdmin } from "@/utils/adminAuth";
export async function GET(req: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  await connectToDB();
  const products = await Product.find().sort({ createdAt: -1 }).lean();
  return NextResponse.json(products);
}

export async function POST(req: Request) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const body = await req.json();
  const { name, slug, description, price, images = [], category, inventory = 0 } = body;
  if (!name || !slug || !price || !category) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  await connectToDB();
  const exists = await Product.findOne({ slug });
  if (exists) return NextResponse.json({ error: "Slug already exists" }, { status: 400 });

  const product = new Product({ name, slug, description, price, images, category, inventory });
  await product.save();
  return NextResponse.json(product, { status: 201 });
}
