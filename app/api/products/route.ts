import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoDB";
import Product from "@/models/product";
import {getServerSession} from "next-auth/next"
import { AuthOptions } from "next-auth";
import { authOptions } from "@/lib/authOptions";
export async function GET(req: Request) {
  await connectToDB();
  const q = new URL(req.url).searchParams;
  const category = q.get("category");
  const filter: any = {};
  if(category) filter.category = category;
  const products = await Product.find(filter).sort({ createdAt: -1 }).lean();
  return NextResponse.json({ products });
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session || session.user?.role !== 'admin') {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json();
  const {name, slug, description, price, images, category, inventory, featured} = body;
  if (!name || !slug || !description || !price || !category) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  await connectToDB();
  const existing = await Product.findOne({slug});
  if(existing){
    return NextResponse.json({ error: "Product with this slug already exists" }, { status: 400 });
  }
  const product = new Product({
    name,
    slug,
    description,
    price,
    images,
    category,
    inventory,
    featured
  });
  await product.save();
  return NextResponse.json({ message: "Product created successfully", product
  })
}
